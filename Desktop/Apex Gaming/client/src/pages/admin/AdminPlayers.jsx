import { AdminGeneric } from './AdminModules';

export default function AdminPlayers() {
  return <AdminGeneric 
    title="Players" 
    endpoint="/players"
    columns={[
      { key: 'photo', label: 'Logo', render: (r) => r.photo ? <img src={r.photo} alt="logo" style={{height: '30px', borderRadius: '4px'}}/> : '—' },
      { key: 'ign', label: 'IGN' },
      { key: 'realName', label: 'Real Name' },
      { key: 'role', label: 'Role' },
      { key: 'isActive', label: 'Status', render: (r) => r.isActive !== false ? 'Active' : 'Inactive' },
    ]}
    schema={[
      { key: 'ign', label: 'In-Game Name (IGN)', type: 'text', required: true },
      { key: 'realName', label: 'Real Name', type: 'text', required: true },
      { key: 'slug', label: 'Slug', type: 'text', required: true },
      { key: 'role', label: 'Role', type: 'text', required: true },
      { key: 'country', label: 'Country', type: 'text', defaultValue: 'India' },
      { key: 'photo', label: 'Photo URL', type: 'text' },
      { key: 'isActive', label: 'Is Active', type: 'checkbox', defaultValue: true },
      { key: 'isFeatured', label: 'Is Featured', type: 'checkbox' },
      { key: 'achievements', label: 'Achievements (JSON Array)', type: 'json', placeholder: '[\n  {\n    "date": "2024-05-15",\n    "placement": "1st",\n    "tier": "S-Tier",\n    "tournament": "BGIS",\n    "teamLogo": "https://...",\n    "prizePool": "$10,000"\n  }\n]' },
      { key: 'awards', label: 'Awards (JSON Array)', type: 'json' },
    ]}
  />;
}
