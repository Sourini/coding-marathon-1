/* 
    [brand]: Manufacturer or label.
    [subtotal]: Item total before discount.
    [tax]: Applicable tax amount.
    [availability]: In stock / out of stock.
 */

import React, { useState } from "react";
import Item from "./item";

function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState("");
  const [subtotal, setSubtotal] = useState("");
  const [tax, setTax] = useState("");
  const [availability, setAvailability] = useState("");

  // Handle input change for item name
  function handleItemNameChange(event) {
    setItemName(event.target.value);
  }

  // Handle input change for quantity
  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  // Handle input change for item brand
  function handleItemBrandChange(event) {
    setBrand(event.target.value);
  }

    // Handle input change for item subtotal
  function handleItemSubtotalChange(event) {
    setSubtotal(event.target.value);
  }

    // Handle input change for item tax
  function handleItemTaxChange(event) {
    setTax(event.target.value);
  }

    // Handle input change for item availability
  function handleItemAvailabilityChange(event) {
    setAvailability(event.target.value);
  }


  // Add a new item to the list
  function addItem() {
    if (itemName.trim() !== "" && quantity.trim() !== "") {
      setItems((i) => [...i, { itemName, brand, quantity, subtotal, tax, availability }]);
      setItemName("");
      setBrand("");
      setQuantity("");
      setSubtotal("");
      setTax("");
      setAvailability(""); // Clear the input fields
    }
  }

  // Delete an item from the list
  function deleteItem(index) {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  }

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      <div>
        <input
          type="text"
          placeholder="Enter item name..."
          value={itemName}
          onChange={handleItemNameChange}
        /><br /><input
          type="number"
          placeholder="Enter quantity..."
          value={quantity}
          onChange={handleQuantityChange}
        /><br /><input
          type="text"
          placeholder="Enter item brand..."
          value={brand}
          onChange={handleItemBrandChange}
        /><br /><input
          type="number"
          placeholder="Enter item subtotal..."
          value={subtotal}
          onChange={handleItemSubtotalChange}
        /><br /><input
          type="number"
          placeholder="Enter item tax..."
          value={tax}
          onChange={handleItemTaxChange}
        /><br /><input
          type="text"
          placeholder="Enter item availability..."
          value={availability}
          onChange={handleItemAvailabilityChange}
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <ol>
        {items.map((item, index) => (
          <Item
            key={index}
            itemName={item.itemName}
            brand={item.brand}
            quantity={item.quantity}
            subtotal={item.subtotal}
            tax={item.tax}
            availability={item.availability} 
            onDelete={() => deleteItem(index)} />
        ))}
      </ol>
    </div>
  );
}

export default ShoppingCart;