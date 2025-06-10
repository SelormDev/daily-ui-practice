import Button from "./components/day-001-button/button";
import Input from "./components/day-002-input-field/input-field";

function App() {
  return (
    <>
      <h1>Daily UI Practice</h1>
      <div className="solutions-container">
        <section id="day-001">
          <h2>Day 001: Button Component</h2>
          <div className="solution">
            <Button label="Click Me" onClick={() => alert("Button Clicked!")} />
          </div>
        </section>
        <section id="day-002">
          <h2>Day 002: Input field</h2>
          <div className="solution">
            <Input
              label="First Name"
              type="text"
              placeholder="type here"
              id="firstname"
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
