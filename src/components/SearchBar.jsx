function SearchBar({ searchTerm, handleSearch }) {
    return (
      <input
        type="text"
        placeholder="Search by title, author, or genre"
        value={searchTerm}
        onChange={handleSearch}
      />
    );
  }
  
  export default SearchBar;
  