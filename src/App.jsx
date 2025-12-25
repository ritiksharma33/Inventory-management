import { useState, useEffect } from 'react';
import InventoryDashboard from './pages/InventoryDashboard';
import AddProductModal from './components/AddProductModal';

export default function App() {
  // 1. Load data from localStorage or use default
  const [products, setProducts] = useState(() => {
    const savedData = localStorage.getItem("inventory-products");
    return savedData ? JSON.parse(savedData) : [
      {category: "Electronics", price: "$999", stocked: true, name: "MacBook Air M1"},
      {category: "Electronics", price: "$699", stocked: true, name: "iPhone 13"},
      {category: "Accessories", price: "$199", stocked: false, name: "AirPods Pro"},
      {category: "Furniture", price: "$250", stocked: true, name: "Office Chair"},
      {category: "Accessories", price: "$49", stocked: true, name: "Logitech Mouse"},
      {category: "Furniture", price: "$150", stocked: false, name: "Standing Desk"}
    ];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  // 2. Save to localStorage whenever products change
  useEffect(() => {
    localStorage.setItem("inventory-products", JSON.stringify(products));
  }, [products]);

  function handleAddProduct(newProduct) {
    setProducts([...products, newProduct]);
    setIsModalOpen(false);
  }

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Inventory Manager</h1>
        <button onClick={() => setIsModalOpen(true)} className="primaryBtn">
          + Add Item
        </button>
      </div>

      {/* The Dashboard handles the Search and Grid */}
      <InventoryDashboard products={products} />

      <AddProductModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSave={handleAddProduct} 
      />
    </div>
  );
}