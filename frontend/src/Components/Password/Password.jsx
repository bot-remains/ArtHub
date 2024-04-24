import {useState} from "react";
import {IoEyeOutline, IoEyeOffOutline} from "react-icons/io5";

function Password({label, placeholder, value, handler}) {
  let [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full">
      <label htmlFor={label} className="block text-zinc-400 text-lg">
        {label}
      </label>
      <div className="relative w-full">
        <input
          type={`${showPassword ? "text" : "password"}`}
          placeholder={placeholder}
          id={label}
          value={value}
          onChange={handler}
          className="mt-1 relative block w-full p-3 pr-8 bg-zinc-900 border border-zinc-600 rounded-md focus:outline-none"
        />
        <div
          className="absolute right-2 top-0 transform translate-y-[105%] cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
        </div>
      </div>
    </div>
  );
}

export default Password;
