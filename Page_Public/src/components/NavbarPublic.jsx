import { Link, useSearchParams } from "react-router-dom";
import SearchComponent from "./SearchPublic";

const Navbar = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const handleOnSearch = (name) => {
    // Remove the search parameter if the name is empty
    const newSearchParams = name ? { search: name } : {};

    // Update the URL with the search parameter
    setSearchParams(newSearchParams);
  };

  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <Link to="/">
          <a className="btn btn-ghost normal-case text-xl">KarirLink</a>
        </Link>
      </div>
      <div className="flex-none gap-5">
        <div className="form-control">
          {/* <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-50 md:w-auto"
          /> */}
          <SearchComponent onSearch={handleOnSearch} />
        </div>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
