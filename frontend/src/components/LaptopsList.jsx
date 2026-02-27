import React from 'react';
import LaptopItem from './LaptopItem';

export default function LaptopsList({ laptops, onEdit, onDelete }) {
  return (
    <div className="laptops-page__grid">
      {laptops.map(laptop => (
        <LaptopItem
          key={laptop.id}
          laptop={laptop}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
