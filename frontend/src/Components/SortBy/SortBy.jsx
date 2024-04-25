import React, {useState} from "react";

function SortBy() {
  const [selectedOption, setSelectedOption] = useState("nameAsc");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(selectedOption);
  };

  return (
    <div className="relative bg-zinc-900">
      <span className="absolute top-[11%] left-0 pl-2 flex items-center pointer-events-none">
        Sort by:
      </span>
      <select
        name="sortby"
        value={selectedOption}
        onChange={handleChange}
        className="p-1 pl-[66px] bg-zinc-900 cursor-pointer border border-zinc-600 rounded focus:outline-none"
      >
        <option value="likeAsc">Likes: Low to High</option>
        <option value="likeDsc">Likes: High to Low</option>
        <option value="nameAsc">Name: A to Z</option>
        <option value="nameDsc">Name: Z to A</option>
        <option value="newest">Newest</option>
      </select>
    </div>
  );
}

export default SortBy;
