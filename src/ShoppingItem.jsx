import React from 'react';

const ShoppingItem = ({ item, onToggle, onDelete, onEditQuantity }) => {
  const handleQuantityChange = (delta) => {
    const newQuantity = Math.max(1, item.quantity + delta);
    onEditQuantity(item.id, newQuantity);
  };

  return (
    <div className={`shopping-item ${item.bought ? 'bought' : ''}`}>
      <input
        type="checkbox"
        checked={item.bought}
        onChange={() => onToggle(item.id)}
        className="checkbox"
      />
      
      <div className="item-details">
        <span className="item-name">{item.name}</span>
        <span className="item-quantity">× {item.quantity}</span>
      </div>
      
      <div className="item-controls">
        <button 
          onClick={() => handleQuantityChange(-1)}
          className="control-btn"
          disabled={item.quantity <= 1}
        >
          −
        </button>
        <button 
          onClick={() => handleQuantityChange(1)}
          className="control-btn"
        >
          +
        </button>
        <button 
          onClick={() => onDelete(item.id)}
          className="delete-btn"
        >
          Usuń
        </button>
      </div>
    </div>
  );
};

export default ShoppingItem;
