import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputText(newValue);
  };

  const addItem = () => {
    const newItem = {
      id: uuidv4(),
      text: inputText
    };

    setItems((prevItems) => [...prevItems, newItem]);
    setInputText("");
  };

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <ToDoItem
              key={todoItem.id}
              id={todoItem.id}
              text={todoItem.text}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
