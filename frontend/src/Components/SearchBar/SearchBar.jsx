import {IoSearch} from "react-icons/io5";

function SearchBar() {
  return (
    <div className="flex items-center w-[30%]">
      <button className="flex items-center justify-center focus:outline-none rounded-l-full h-[40px] p-[7px] bg-zinc-900 border border-zinc-600 border-r-0">
        <IoSearch className="h-[40px]" />
      </button>
      <input
        type="text"
        placeholder="Search..."
        className="w-full h-[40px] p-[7px] bg-zinc-900 border rounded-r-full border-l-0 pl-0 border-zinc-600 focus:outline-none"
      />
    </div>
  );
}

export default SearchBar;
