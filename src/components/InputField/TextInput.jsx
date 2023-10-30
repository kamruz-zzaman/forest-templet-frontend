const TextInput = ({ id, type, label, placeholder, require = false }) => {
  return (
    <div>
      <label htmlFor={id}>
        {" "}
        {label} {require && "*"}{" "}
      </label>
      <input
        className="border border-primary"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
