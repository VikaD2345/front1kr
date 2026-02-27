import React, { useState, useEffect } from 'react';
import { api } from '../../api';
import LaptopsList from '../../components/LaptopsList';
import LaptopModal from '../../components/LaptopModal';
import './LaptopsPage.scss';

export default function LaptopsPage() {
  const [laptops, setLaptops] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingLaptop, setEditingLaptop] = useState(null);

  useEffect(() => { loadLaptops(); }, []);

  const loadLaptops = async () => {
    const data = await api.getLaptops();
    setLaptops(data);
  };

  const handleAdd = () => { setEditingLaptop(null); setModalOpen(true); };
  const handleEdit = (laptop) => { setEditingLaptop(laptop); setModalOpen(true); };

  const handleDelete = async (id) => {
    if (!window.confirm('Удалить ноутбук?')) return;
    await api.deleteLaptop(id);
    setLaptops(prev => prev.filter(l => l.id !== id));
  };

  const handleSave = async (formData) => {
    if (editingLaptop) {
      const updated = await api.updateLaptop(editingLaptop.id, formData);
      setLaptops(prev => prev.map(l => l.id === updated.id ? updated : l));
    } else {
      const created = await api.createLaptop(formData);
      setLaptops(prev => [...prev, created]);
    }
    setModalOpen(false);
  };

  return (
    <div className="laptops-page">
      <div className="laptops-page__header">
        <h1>💻 Магазин ноутбуков</h1>
        <button className="laptops-page__add-btn" onClick={handleAdd}>
          + Добавить ноутбук
        </button>
      </div>

      <LaptopsList
        laptops={laptops}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {modalOpen && (
        <LaptopModal
          laptop={editingLaptop}
          onSave={handleSave}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}
