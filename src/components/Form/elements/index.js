export const Input = ({ type, name, change, placeholder }) => (
  <label>
    <input
      type={type}
      name={name}
      onChange={change}
      placeholder={placeholder}
    />
  </label>
);

export const Button = ({ text }) => <button>{text}</button>;
