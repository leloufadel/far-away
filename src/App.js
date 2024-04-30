import "./index.css";

export default function App() {
  return (
    <div>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1> Far Away 💼 </h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3> what you need for your trip 😊? </h3>
    </div>
  );
}
function PackingList() {
  return <div className="list">List</div>;
}

function Stats() {
  return (
    <footer className="stats">
      <em> 💼 You have X items on your List, and you alredy packed X (X%)</em>
    </footer>
  );
}
// export default App;
