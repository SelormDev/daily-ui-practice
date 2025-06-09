import Button from "./components/day-001-button/button";

function App() {
  return (
    <>
      <div>
        <h1>Daily UI Practice</h1>
        <h2>Day 001: Button Component</h2>
        <Button label="Click Me" onClick={() => alert("Button Clicked!")} />
      </div>
    </>
  );
}

export default App;
