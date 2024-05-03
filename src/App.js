import React, { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

function App() {
  //State hook - "useState"
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);

  //Helper functions

  function addItem() {
    if (!newItem) {
      alert('Enter an item');
      return;
    }

    const item = {
      id: uuidv4(),
      value: newItem,
    };
    setItems((oldList) => [...oldList, item]);
    setNewItem('');
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <>
      <div className='App'>
        {/* 1. Header */}
        <h1>Todo List App</h1>

        {/* 2. Input (input and button) */}
        <input
          type='text'
          placeholder='Add an item...'
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={() => addItem()}>Add</button>
      </div>
      <div>
        {/* 3. List of items (unordered list with list items) */}

        <ul className='listContainer'>
          {items.map((item) => {
            return (
              <li className='listText' key={item.id}>
                {item.value}
                <button
                  className='deleteButton'
                  onClick={() => deleteItem(item.id)}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
