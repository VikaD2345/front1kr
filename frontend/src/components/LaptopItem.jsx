import React from 'react';

export default function LaptopItem({ laptop, onEdit, onDelete }) {
  return (
    <div className="laptop-card">
      <span className="laptop-card__category">{laptop.category}</span>
      <h3 className="laptop-card__name">{laptop.name}</h3>
      <p className="laptop-card__description">{laptop.description}</p>
      <div className="laptop-card__price">{laptop.price.toLocaleString('ru-RU')} ₽</div>
      <div className="laptop-card__meta">
        На складе: {laptop.stock} шт.
        {laptop.rating && ` · ⭐ ${laptop.rating}`}
      </div>
      <div className="laptop-card__actions">
        <button className="laptop-card__edit-btn" onClick={() => onEdit(laptop)}>
          Редактировать
        </button>
        <button className="laptop-card__delete-btn" onClick={() => onDelete(laptop.id)}>
          Удалить
        </button>
      </div>
    </div>
  );
}
