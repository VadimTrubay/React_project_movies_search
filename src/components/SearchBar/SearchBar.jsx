import css from "./SearchBar.module.css";
import {useState} from "react";
import toast, {Toaster} from "react-hot-toast";

const SearchBar = ({onSearch}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      toast.error("Please enter a search term");
      return;
    }
    onSearch(searchTerm);
    setSearchTerm("");
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header className={css.search_bar}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
        <Toaster/>
      </form>
    </header>
  );
};

export default SearchBar;
