export default function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
  return (
    <div className="searchContainer">
      <input 
        type="text" 
        value={filterText} 
        placeholder="Search inventory..."
        onChange={(e) => onFilterTextChange(e.target.value)}
        className="searchInput"
      />
      <label className="checkboxLabel">
        <input 
          type="checkbox" 
          checked={inStockOnly} 
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        <span style={{ marginLeft: '8px' }}>Show in-stock only</span>
      </label>
    </div>
  );
}