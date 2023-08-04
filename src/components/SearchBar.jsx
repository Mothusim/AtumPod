export default function SearchBar({ onSearch }) {

  const handleChange = (event) => {

    const searchText = event.target.value;
    onSearch(searchText);
    
  };

  return (

    <div>

      <input
        type="text"
        placeholder="Search shows"
        className="search"
        id="header-search"
        onChange={handleChange}
        // style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc", fontSize: "16px", }}
      />

    </div>

  );

}


