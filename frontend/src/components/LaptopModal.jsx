import React, { useState, useEffect } from 'react';

const EMPTY = { name: '', category: '', description: '', price: '', stock: '', rating: '' };

export default function LaptopModal({ laptop, onSave, onClose }) {
  const [form, setForm] = useState(EMPTY);

  useEffect(() => {
    setForm(laptop ? { ...laptop } : EMPTY);
  }, [laptop]);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...form,
      price: Number(form.price),
      stock: Number(form.stock),
      rating: form.rating !== '' ? Number(form.rating) : null,
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2>{laptop ? 'Редактировать ноутбук' : 'Добавить ноутбук'}</h2>
        <form className="modal__form" onSubmit={handleSubmit}>
          {[
            { label: 'Название', name: 'name', type: 'text', required: true },
            { label: 'Категория', name: 'category', type: 'text', required: true },
            { label: 'Описание', name: 'description', type: 'textarea', required: true },
            { label: 'Цена (₽)', name: 'price', type: 'number', required: true },
            { label: 'На складе', name: 'stock', type: 'number', required: true },
            { label: 'Рейтинг (0–5)', name: 'rating', type: 'number' },
          ].map(({ label, name, type, required }) => (
            <div className="modal__field" key={name}>
              <label>{label}</label>
              {type === 'textarea'
                ? <textarea name={name} value={form[name]} onChange={handleChange} required={required} />
                : <input name={name} type={type} value={form[name]} onChange={handleChange} required={required} step={name === 'rating' ? '0.1' : '1'} min="0" />
              }
            </div>
          ))}
          <div className="modal__actions">
            <button type="submit">Сохранить</button>
            <button type="button" onClick={onClose}>Отмена</button>
          </div>
        </form>
      </div>
    </div>
  );
}
