import "./input-field.css";

function Input({ label = "Label", type, id, placeholder = "Type Here" }) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} />
    </div>
  );
}

export default Input;
