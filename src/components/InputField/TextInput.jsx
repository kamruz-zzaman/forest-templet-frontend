const TextInput = ({
  id,
  type,
  label,
  placeholder,
  require = false,
  style,
}) => {
  return (
    <div className={`flex flex-col my-1 w-full ${style}`}>
      <label
        className="uppercase font-bold text-[#333] cursor-pointer"
        htmlFor={id}
      >
        {label} {require && "*"}
      </label>

      <input
        id={id}
        className="border-2 border-primary py-1.5 px-3 outline-none focus:shadow-md rounded"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
