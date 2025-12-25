export default function ProductCard({ product }) {
  return (
    <div className="card">
      <div className="cardHeader">
        <span className="categoryTag">{product.category}</span>
        <span className={product.stocked ? "stockBadge" : "outStockBadge"}>
          {product.stocked ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>
      <h3 className="productName">{product.name}</h3>
      <div className="cardFooter">
        <span className="price">{product.price}</span>
      </div>
    </div>
  );
}