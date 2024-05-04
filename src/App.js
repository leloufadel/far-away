import "./index.css";
import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

export default function App() {

  const [items, setItems] = useState([]);
  function HandleAddItem (item) {
     setItems((items) => [...items, item]);
  }
  function HandleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !==id) )
  }

  function toggleItem(id) {
    setItems((items) => items.map((item) => item.id === id ? {...item, packed: !item.packed} : items ) )
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={HandleAddItem} />
      <PackingList items={items} onDeleteItem={HandleDeleteItem} ontoggleItem={toggleItem}/>
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1> 🌴 Far Away 💼 </h1>;
}

function Form({onAddItems}) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  
  function handleSubmit(e) {
    e.preventDefault();
    if(!description) return;

    const newItem = { description, quantity, packed: false, 
      id: Date.now() };
     console.log(newItem);
     onAddItems(newItem);
     
     setDescription("");
     setQuantity(1);
    
 }

  return (
    <form className="add-form" onClick={handleSubmit}>
      <h3> what you need for your trip 😊? </h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {" "}
            {num}
          </option>
        ))}
      </select>

      <input type="text" placeholder="Item..."  value= {description}
      onChange={(e) => {
        setDescription(e.target.value)}}
      />
      <button> Add </button>
    </form>
  );
}
function PackingList({items, onDeleteItem, ontoggleItem}) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} onDeleteItem={onDeleteItem} ontoggleItem={ontoggleItem} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem, ontoggleItem }) {
  return (
    <li>
      <input type="checkbox" checked={item.packed} onChange={ () => ontoggleItem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {" "}
        {item.quantity}
        
        {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats({items}) {

  let numItems = items.length;
  return (
    <footer className="stats">
      <em> 💼 You have {numItems} items on your List, and you alredy packed X (X%)</em>
    </footer>
  );
}
// export default App;
