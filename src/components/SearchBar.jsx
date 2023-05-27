import React, { useState } from "react";
import {AiOutlineSearch} from "react-icons/ai"

const SearchBar = () => {
  const [searchText,setSearchText] = useState();
  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  }

  const searchedProduct = () => {
    
  }

  return (
    <form>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <AiOutlineSearch size={25} />
        </div>
        <input
          type="search"
          value={searchText}
          onChange={handleChange}
          className="block w-full p-2 pl-10 text-sm text-gray-900 border placeholder-primary placeholder-opacity-60 border-gray-300 rounded-lg bg-gray-50 outline-none"
          placeholder="Search Products..."
          required
        />
      </div>
    </form>
  );
};

export default SearchBar;
