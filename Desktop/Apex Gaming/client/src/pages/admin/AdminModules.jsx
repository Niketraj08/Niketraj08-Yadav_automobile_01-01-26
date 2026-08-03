import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import AdminPlayers from './AdminPlayers';
import api from '../../utils/api';
import DynamicFormModal from './DynamicFormModal';

export const AdminGeneric = ({ title, endpoint, getEndpoint, columns, schema = [] }) => {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRow, setEditingRow] = useState(null);

  const fetchEndpoint = getEndpoint || endpoint;

  // Fetch Data
  const { data, isLoading } = useQuery({
    queryKey: [fetchEndpoint],
    queryFn: () => api.get(fetchEndpoint).then(res => res.data || res),
  });

  // Create Mutation
  const createMutation = useMutation({
    mutationFn: (newData) => api.post(endpoint, newData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [fetchEndpoint] });
      toast.success(`${title} created successfully`);
      setIsModalOpen(false);
    },
    onError: (err) => toast.error(err.message || 'Failed to create'),
  });

  // Update Mutation
  const updateMutation = useMutation({
    mutationFn: ({ id, updatedData }) => api.put(`${endpoint}/${id}`, updatedData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [fetchEndpoint] });
      toast.success(`${title} updated successfully`);
      setIsModalOpen(false);
    },
    onError: (err) => toast.error(err.message || 'Failed to update'),
  });

  // Delete Mutation
  const deleteMutation = useMutation({
    mutationFn: (id) => api.delete(`${endpoint}/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [fetchEndpoint] });
      toast.success(`${title} deleted successfully`);
    },
    onError: (err) => toast.error(err.message || 'Failed to delete'),
  });

  const handleAdd = () => {
    setEditingRow(null);
    setIsModalOpen(true);
  };

  const handleEdit = (row) => {
    setEditingRow(row);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      deleteMutation.mutate(id);
    }
  };

  const handleSubmit = (formData) => {
    // Unpack dotted keys into nested objects (e.g., 'team1.name' -> { team1: { name: '...' } })
    const payload = {};
    Object.keys(formData).forEach((key) => {
      if (key.includes('.')) {
        const [parent, child] = key.split('.');
        payload[parent] = payload[parent] || {};
        payload[parent][child] = formData[key];
      } else {
        payload[key] = formData[key];
      }
    });

    if (editingRow) {
      updateMutation.mutate({ id: editingRow._id, updatedData: payload });
    } else {
      createMutation.mutate(payload);
    }
  };

  const rows = Array.isArray(data) ? data : (data?.data || []);

  return (
    <>
      <Helmet><title>{`${title} | Admin`}</title></Helmet>
      <div className="admin-header">
        <h1>{title}</h1>
        <button className="btn btn-primary" onClick={handleAdd}>+ Add New</button>
      </div>
      
      <div className="glass-card" style={{ padding: '1rem', overflow: 'auto' }}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                {columns.map((c) => <th key={c.key}>{c.label}</th>)}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row._id}>
                  {columns.map((c) => (
                    <td key={c.key}>{c.render ? c.render(row) : (row[c.key]?.toString() || '—')}</td>
                  ))}
                  <td className="admin-actions">
                    <button onClick={() => handleEdit(row)}>Edit</button>
                    <button className="danger" onClick={() => handleDelete(row._id)}>Delete</button>
                  </td>
                </tr>
              ))}
              {rows.length === 0 && (
                <tr><td colSpan={columns.length + 1} style={{ textAlign: 'center' }}>No records found.</td></tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      <DynamicFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        initialData={editingRow}
        schema={schema}
        title={editingRow ? `Edit ${title}` : `Add ${title}`}
      />
    </>
  );
};

export function AdminNews() {
  return <AdminGeneric 
    title="News" 
    endpoint="/news"
    getEndpoint="/news/admin/all"
    columns={[
      { key: 'title', label: 'Title' },
      { key: 'category', label: 'Category' },
      { key: 'isPublished', label: 'Status', render: (r) => r.isPublished ? 'Published' : 'Draft' },
    ]}
    schema={[
      { key: 'title', label: 'Title', type: 'text', required: true },
      { key: 'slug', label: 'Slug', type: 'text', required: true },
      { key: 'category', label: 'Category', type: 'select', options: [
        { label: 'Team News', value: 'team_news' },
        { label: 'Tournament News', value: 'tournament_news' },
        { label: 'Transfer News', value: 'transfer_news' },
        { label: 'Announcement', value: 'announcement' },
      ], required: true },
      { key: 'excerpt', label: 'Excerpt', type: 'textarea' },
      { key: 'content', label: 'Content', type: 'textarea' },
      { key: 'thumbnail', label: 'Thumbnail URL', type: 'text', placeholder: 'https://...' },
      { key: 'isPublished', label: 'Published', type: 'checkbox' }
    ]}
  />;
}

export function AdminProducts() {
  return <AdminGeneric 
    title="Store Products" 
    endpoint="/store"
    columns={[
      { key: 'name', label: 'Product' },
      { key: 'category', label: 'Category' },
      { key: 'price', label: 'Price', render: (r) => `₹${r.price}` },
      { key: 'stock', label: 'Stock' },
    ]}
    schema={[
      { key: 'name', label: 'Name', type: 'text', required: true },
      { key: 'slug', label: 'Slug', type: 'text', required: true },
      { key: 'category', label: 'Category', type: 'select', options: [
        { label: 'Jerseys', value: 'jersey' },
        { label: 'Hoodies', value: 'hoodie' },
        { label: 'Caps', value: 'cap' },
        { label: 'Mousepads', value: 'mousepad' },
      ], required: true },
      { key: 'price', label: 'Price', type: 'number', required: true },
      { key: 'comparePrice', label: 'Compare Price', type: 'number' },
      { key: 'stock', label: 'Stock', type: 'number', defaultValue: 100 },
      { key: 'images', label: 'Image URL', type: 'text', placeholder: 'Enter single image URL (temporary)' },
      { key: 'isFeatured', label: 'Featured', type: 'checkbox' }
    ]}
  />;
}

export function AdminSponsors() {
  return <AdminGeneric 
    title="Sponsors" 
    endpoint="/sponsors"
    columns={[
      { key: 'name', label: 'Name' },
      { key: 'tier', label: 'Tier' },
      { key: 'logo', label: 'Logo', render: (r) => r.logo ? <img src={r.logo} alt="logo" style={{height: '30px'}}/> : 'No logo' }
    ]}
    schema={[
      { key: 'name', label: 'Name', type: 'text', required: true },
      { key: 'tier', label: 'Tier', type: 'select', options: [
        { label: 'Title', value: 'title' },
        { label: 'Gold', value: 'gold' },
        { label: 'Silver', value: 'silver' },
        { label: 'Bronze', value: 'bronze' }
      ], required: true },
      { key: 'logo', label: 'Logo URL', type: 'text', placeholder: 'https://...', required: true },
      { key: 'website', label: 'Website URL', type: 'text', placeholder: 'https://...' },
      { key: 'description', label: 'Description', type: 'textarea' }
    ]}
  />;
}

export function AdminTournaments() {
  return <AdminGeneric 
    title="Tournaments" 
    endpoint="/tournaments"
    columns={[
      { key: 'name', label: 'Tournament' },
      { key: 'status', label: 'Status' },
      { key: 'prizePool', label: 'Prize Pool' },
    ]}
    schema={[
      { key: 'name', label: 'Name', type: 'text', required: true },
      { key: 'slug', label: 'Slug', type: 'text', required: true },
      { key: 'status', label: 'Status', type: 'select', options: [
        { label: 'Upcoming', value: 'upcoming' },
        { label: 'Ongoing', value: 'ongoing' },
        { label: 'Completed', value: 'completed' },
      ], required: true },
      { key: 'prizePool', label: 'Prize Pool', type: 'text' },
      { key: 'logo', label: 'Logo URL', type: 'text' },
      { key: 'tier', label: 'Tier', type: 'select', options: [
        { label: 'S-Tier', value: 'S-Tier' },
        { label: 'A-Tier', value: 'A-Tier' },
        { label: 'B-Tier', value: 'B-Tier' },
      ], required: true },
    ]}
  />;
}

export function AdminMatches() {
  return <AdminGeneric 
    title="Matches (Live Scores)" 
    endpoint="/matches"
    columns={[
      { key: 'round', label: 'Match' },
      { key: 'score', label: 'Apex Points', render: (r) => r.team1?.score || 0 },
      { key: 'status', label: 'Status' },
    ]}
    schema={[
      { key: 'team1.name', label: 'Team Name', type: 'text', required: true, defaultValue: 'Team Apex' },
      { key: 'team1.score', label: 'Apex Points (Kills/Placement)', type: 'number', defaultValue: 0 },
      { key: 'round', label: 'Match Name (e.g., Match 1 - Erangel)', type: 'text', defaultValue: 'Match 1 - Erangel' },
      { key: 'status', label: 'Status', type: 'select', options: [
        { label: 'Scheduled', value: 'scheduled' },
        { label: 'Live', value: 'live' },
        { label: 'Completed', value: 'completed' },
      ], required: true },
    ]}
  />;
}

export function AdminOrders() {
  return <AdminGeneric 
    title="Orders" 
    endpoint="/orders"
    columns={[
      { key: '_id', label: 'Order ID' },
      { key: 'total', label: 'Total', render: (r) => `₹${r.total}` },
      { key: 'status', label: 'Status' },
    ]}
    schema={[
      { key: 'status', label: 'Status', type: 'select', options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Processing', value: 'processing' },
        { label: 'Shipped', value: 'shipped' },
        { label: 'Delivered', value: 'delivered' },
        { label: 'Cancelled', value: 'cancelled' }
      ], required: true },
    ]}
  />;
}

export function AdminApplications() {
  return <AdminGeneric 
    title="Applications" 
    endpoint="/applications"
    columns={[
      { key: 'name', label: 'Name' },
      { key: 'game', label: 'Game' },
      { key: 'rank', label: 'Rank' },
      { key: 'status', label: 'Status' },
    ]}
    schema={[
      { key: 'status', label: 'Status', type: 'select', options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Reviewed', value: 'reviewed' },
        { label: 'Accepted', value: 'accepted' },
        { label: 'Rejected', value: 'rejected' }
      ], required: true },
      { key: 'notes', label: 'Admin Notes', type: 'textarea' },
    ]}
  />;
}

export function AdminMedia() {
  return <AdminGeneric 
    title="Media" 
    endpoint="/media"
    columns={[
      { key: 'title', label: 'Title' },
      { key: 'type', label: 'Type' },
      { key: 'url', label: 'URL', render: (r) => <a href={r.url} target="_blank" rel="noreferrer">Link</a> },
    ]}
    schema={[
      { key: 'title', label: 'Title', type: 'text', required: true },
      { key: 'type', label: 'Type', type: 'select', options: [
        { label: 'Photo / Image', value: 'photo' },
        { label: 'Video', value: 'video' },
        { label: 'Short', value: 'short' },
        { label: 'Highlight', value: 'highlight' },
      ], required: true },
      { key: 'url', label: 'Media URL', type: 'text', required: true },
      { key: 'thumbnail', label: 'Thumbnail URL', type: 'text' },
      { key: 'isFeatured', label: 'Featured', type: 'checkbox' }
    ]}
  />;
}

export function AdminRosters() {
  return <AdminPlayers />;
}

export function AdminUsers() {
  return <AdminGeneric 
    title="Users" 
    endpoint="/auth/users" // Assuming such route exists or mock it if not
    columns={[
      { key: 'name', label: 'Name' },
      { key: 'email', label: 'Email' },
      { key: 'role', label: 'Role' },
    ]}
    schema={[
      { key: 'role', label: 'Role', type: 'select', options: [
        { label: 'User', value: 'user' },
        { label: 'Admin', value: 'admin' },
        { label: 'Super Admin', value: 'super_admin' },
      ], required: true },
    ]}
  />;
}

export function AdminSettings() {
  return (
    <>
      <Helmet><title>Settings | Admin</title></Helmet>
      <div className="admin-header"><h1>Site Settings</h1></div>
      <div className="glass-card" style={{ padding: '2rem', maxWidth: '600px' }}>
        <p>Site Settings are statically managed in `.env` or constants for now.</p>
        <div className="form-group"><label>Site Name</label><input defaultValue="Team Apex Gaming" disabled /></div>
        <div className="form-group"><label>Tagline</label><input defaultValue="Rise Above. Dominate Always." disabled /></div>
        <div className="form-group"><label>Contact Email</label><input defaultValue="contact@teamapexgaming.com" disabled /></div>
        <button className="btn btn-primary" disabled>Save Settings</button>
      </div>
    </>
  );
}

export function AdminTeamMembers() {
  return <AdminGeneric 
    title="Leadership & Staff" 
    endpoint="/team-members"
    columns={[
      { key: 'name', label: 'Name' },
      { key: 'designation', label: 'Designation' },
      { key: 'type', label: 'Role', render: (r) => r.type.toUpperCase() },
    ]}
    schema={[
      { key: 'name', label: 'Full Name', type: 'text', required: true },
      { key: 'designation', label: 'Designation (e.g. Founder & CEO)', type: 'text', required: true },
      { key: 'type', label: 'Type', type: 'select', options: [
        { label: 'Founder', value: 'founder' },
        { label: 'Co-Founder', value: 'co_founder' },
        { label: 'Manager', value: 'manager' },
        { label: 'Coach', value: 'coach' },
        { label: 'Analyst', value: 'analyst' },
      ], required: true },
      { key: 'photo', label: 'Photo Image URL', type: 'text' },
      { key: 'biography', label: 'Biography', type: 'textarea' },
      { key: 'socialLinks.twitter', label: 'Twitter URL', type: 'text' },
      { key: 'socialLinks.instagram', label: 'Instagram URL', type: 'text' },
      { key: 'socialLinks.linkedin', label: 'LinkedIn URL', type: 'text' },
    ]}
  />;
}

export function AdminAchievements() {
  return <AdminGeneric 
    title="Trophy Cabinet" 
    endpoint="/achievements"
    columns={[
      { key: 'title', label: 'Title' },
      { key: 'game', label: 'Game', render: (r) => r.game ? r.game.toUpperCase() : '' },
      { key: 'placement', label: 'Placement' },
      { key: 'type', label: 'Type', render: (r) => r.type ? r.type.toUpperCase() : 'TEAM' },
      { key: 'dateAchieved', label: 'Date', render: (r) => r.dateAchieved ? new Date(r.dateAchieved).toLocaleDateString() : '—' },
    ]}
    schema={[
      { key: 'title', label: 'Achievement Title', type: 'text', required: true },
      { key: 'game', label: 'Game', type: 'select', options: [
        { label: 'BGMI', value: 'bgmi' },
        { label: 'Valorant', value: 'valorant' },
        { label: 'Free Fire MAX', value: 'free-fire-max' },
        { label: 'CS2', value: 'cs2' }
      ], required: true },
      { key: 'type', label: 'Type', type: 'select', options: [
        { label: 'Team Achievement', value: 'team' },
        { label: 'Player Achievement', value: 'player' }
      ], required: true, defaultValue: 'team' },
      { key: 'placement', label: 'Placement (e.g. Champion, #5)', type: 'text', required: true },
      { key: 'prizePool', label: 'Prize Pool (Optional, e.g. ₹25,00,000)', type: 'text' },
      { key: 'dateAchieved', label: 'Date Achieved', type: 'text', placeholder: 'YYYY-MM-DD', required: true },
      { key: 'image', label: 'Cover Image URL', type: 'text' },
    ]}
  />;
}
