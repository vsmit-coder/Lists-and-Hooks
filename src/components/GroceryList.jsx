import { useState, useRef } from 'react';
import './GroceryList.css';


function GroceryList() {
  const [items, setItems] = useState([
  ]);
  const [isEditing, setIsEditing] = useState(null);
  const [editValue, setEditValue] = useState('');
  const inputRef = useRef(null);

  const handleAddItem = (event) => {
    event.preventDefault();
    const newItem = { name: inputRef.current.value.trim(), quantity: 1 };
    if (newItem.name) {
      setItems([...items, newItem]);
      inputRef.current.value = '';
    }
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleEditClick = (index) => {
    setIsEditing(index);
    setEditValue(items[index].name); // Set the initial value of the input to the item's current name
  };

  const handleEditSave = (index) => {
    const updatedItems = [...items];
    updatedItems[index].name = editValue.trim();
    setItems(updatedItems);
    setIsEditing(null);
    setEditValue('');
  };

  const handleDeleteList = () => {
    setItems([]);
  };

  return (
    <div className="grocery-list">
      <h1>Grocery Shopping</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {isEditing === index ? (
              <div>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button onClick={() => handleEditSave(index)}>Save</button>
                <button onClick={() => setIsEditing(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                <span>{item.name}</span>
                <button onClick={() => handleDeleteItem(index)}>Delete</button>
                <button onClick={() => handleEditClick(index)}>Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          placeholder="Add something to your list"
          ref={inputRef}
        />
        <button type="submit">Add</button>
      </form>
      <button onClick={handleDeleteList}>Delete List</button>
    </div>
  );
}

export default GroceryList;
