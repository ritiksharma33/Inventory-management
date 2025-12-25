import { useState } from 'react';

export default function AddProductModal({ isOpen, onClose, onSave }) {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("$");
  const [category, setCategory] = useState("Electronics");
  const [stocked, setStocked] = useState(true);


  if (!isOpen) return null;


  function handleSubmit(e) {
    e.preventDefault();
    onSave({ name, price, category, stocked });
    

    setName("");
    setPrice("$");
    setCategory("Electronics");
    setStocked(true);
  }

  return (
    <div className="overlay">
      <div className="modal">
        
        {/* Header */}
        <div className="modalHeader">
          <h3>Add New Item</h3>
          <button onClick={onClose} className="closeBtn">&times;</button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="form">
          
          {/* Name Input */}
          <div className="inputGroup">
            <label className="label">Product Name</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
              className="input"
              placeholder="e.g. Wireless Mouse"
            />
          </div>

          {/* Price Input */}
          <div className="inputGroup">
            <label className="label">Price</label>
            <input 
              type="text" 
              value={price} 
              onChange={(e) => setPrice(e.target.value)} 
              required 
              className="input"
            />
          </div>

          {/* Category Select */}
          <div className="inputGroup">
            <label className="label">Category</label>
            <select 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
              className="select"
            >
              <option value="Electronics">Electronics</option>
              <option value="Furniture">Furniture</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>

          {/* Stock Checkbox */}
          <div className="checkboxGroup">
            <input 
              type="checkbox" 
              checked={stocked} 
              onChange={(e) => setStocked(e.target.checked)} 
              id="stockCheck"
            />
            <label htmlFor="stockCheck" style={{ marginLeft: '8px' }}>In Stock</label>
          </div>

          {/* Footer Buttons */}
          <div className="modalFooter">
            <button type="button" onClick={onClose} className="cancelBtn">Cancel</button>
            <button type="submit" className="saveBtn">Add Item</button>
          </div>
          
        </form>
      </div>
    </div>
  );
}