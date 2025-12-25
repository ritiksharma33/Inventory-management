import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ProductGrid from '../components/ProductGrid';

export default function InventoryDashboard({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly} 
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductGrid 
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly} 
      />
    </div>
  );
}