import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchComponent = ({ onSearch }) => {
  let [searchParams] = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(searchParams.get("search"));

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    // onSearch(term);
  };

  return (
    // <form>
    <input
      type="text"
      placeholder="Search"
      className="input input-bordered w-50 md:w-auto"
      value={searchTerm}
      onChange={handleSearchChange}
      onKeyDown={(e) => e.key === "Enter" && onSearch(searchTerm)}
    />
    // </form>
  );
};

export default SearchComponent;
