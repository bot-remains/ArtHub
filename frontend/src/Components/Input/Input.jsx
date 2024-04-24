function Input({label, type, placeholder, value, handler}) {
  return (
    <div className="w-full">
      <label htmlFor={label} className="block text-zinc-400 text-lg">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={label}
        value={value}
        onChange={handler}
        className="mt-1 block w-full p-3 bg-zinc-900 border border-zinc-600 rounded-md focus:outline-none"
      />
    </div>
  );
}

export default Input;
