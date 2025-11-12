import { useState } from 'react';
import ShoppingItem from './ShoppingItem';
import './App.css';

function App() {
  const [shoppingItems, setShoppingItems] = useState([
    { id: 1, name: "Mleko", quantity: 2, bought: false },
    { id: 2, name: "Chleb", quantity: 1, bought: true },
    { id: 3, name: "Jajka", quantity: 12, bought: false },
    { id: 4, name: "Masło", quantity: 1, bought: false }
  ]);

  const toggleShoppingItem = (id) => {
    setShoppingItems(items =>
      items.map(item =>
        item.id === id ? { ...item, bought: !item.bought } : item
      )
    );
  };

  const deleteShoppingItem = (id) => {
    setShoppingItems(items => items.filter(item => item.id !== id));
  };

  const editQuantity = (id, newQuantity) => {
    setShoppingItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div className="app">
      <h1>Lista Zakupów</h1>
      <div className="shopping-list">
        {shoppingItems.map(item => (
          <ShoppingItem
            key={item.id}
            item={item}
            onToggle={toggleShoppingItem}
            onDelete={deleteShoppingItem}
            onEditQuantity={editQuantity}
          />
        ))}
      </div>
    </div>
  );
}

export default App
