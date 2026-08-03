import { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

export default function DynamicFormModal({ isOpen, onClose, onSubmit, initialData, schema, title }) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      const defaultState = {};
      (schema || []).forEach((field) => {
        if (field.type === 'json') {
          defaultState[field.key] = field.defaultValue !== undefined ? field.defaultValue : [];
        } else {
          defaultState[field.key] = field.defaultValue !== undefined ? field.defaultValue : '';
        }
      });
      setFormData(defaultState);
    }
  }, [initialData, schema, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e, key) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const handleCheckboxChange = (e, key) => {
    setFormData({ ...formData, [key]: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedData = { ...formData };
    (schema || []).forEach(field => {
      if (field.type === 'json' && typeof parsedData[field.key] === 'string') {
        const trimmed = parsedData[field.key].trim();
        if (trimmed === '') {
          parsedData[field.key] = [];
        } else {
          try {
            parsedData[field.key] = JSON.parse(trimmed);
          } catch (err) {
            alert(`Invalid JSON in ${field.label}`);
            throw err;
          }
        }
      }
    });
    onSubmit(parsedData);
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(5px)' }}>
      <div className="glass-card" style={{ width: '100%', maxWidth: '600px', padding: '2rem', maxHeight: '90vh', overflowY: 'auto', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', color: 'var(--white)', cursor: 'pointer', fontSize: '1.5rem' }}>
          <FiX />
        </button>
        <h2 style={{ fontFamily: 'var(--font-display)', marginBottom: '1.5rem', color: 'var(--primary)' }}>{title}</h2>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {(schema || []).map((field) => (
            <div key={field.key} className="form-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontFamily: 'var(--font-tech)', fontSize: '0.8rem', color: 'var(--gray-light)' }}>{field.label}</label>
              
              {field.type === 'textarea' ? (
                <textarea 
                  value={formData[field.key] || ''} 
                  onChange={(e) => handleChange(e, field.key)} 
                  required={field.required}
                  style={{ minHeight: '100px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '0.75rem' }}
                />
              ) : field.type === 'json' ? (
                <textarea 
                  value={typeof formData[field.key] === 'object' ? JSON.stringify(formData[field.key] || [], null, 2) : formData[field.key] || ''} 
                  onChange={(e) => handleChange(e, field.key)} 
                  required={field.required}
                  style={{ minHeight: '150px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '0.75rem', fontFamily: 'monospace', fontSize: '0.8rem' }}
                  placeholder={field.placeholder || '[\n  {\n    "key": "value"\n  }\n]'}
                />
              ) : field.type === 'checkbox' ? (
                <input 
                  type="checkbox" 
                  checked={!!formData[field.key]} 
                  onChange={(e) => handleCheckboxChange(e, field.key)}
                  style={{ width: '20px', height: '20px' }}
                />
              ) : field.type === 'select' ? (
                <select 
                  value={formData[field.key] || ''} 
                  onChange={(e) => handleChange(e, field.key)} 
                  required={field.required}
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '0.75rem' }}
                >
                  <option value="">Select an option</option>
                  {field.options.map(opt => (
                    <option key={opt.value} value={opt.value} style={{ color: 'black' }}>{opt.label}</option>
                  ))}
                </select>
              ) : (
                <input 
                  type={field.type || 'text'} 
                  value={formData[field.key] || ''} 
                  onChange={(e) => handleChange(e, field.key)} 
                  required={field.required}
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '0.75rem' }}
                  placeholder={field.placeholder || ''}
                />
              )}
            </div>
          ))}
          
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>{initialData ? 'Update' : 'Create'}</button>
            <button type="button" className="btn btn-ghost" onClick={onClose} style={{ flex: 1 }}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
