import ProductCard from './ProductCard';

export default function ProductGrid({ products, filterText, inStockOnly }) {
  const filteredProducts = products.filter(product => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) return false;
    if (inStockOnly && !product.stocked) return false;
    return true;
  });

  if (filteredProducts.length === 0) {
    return <div className="emptyState">No products found.</div>;
  }

  return (
    <div className="grid">
      {filteredProducts.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}