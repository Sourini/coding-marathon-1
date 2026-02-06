function Item({ itemName, brand, quantity, subtotal, tax, availability, onDelete }) {
  return (
    <div className="item">
      <p>Item Name: {itemName}</p>
      <p>Brand: {brand}</p>
      <p>Quantity: {quantity}</p>
      <p>Subtotal: {subtotal}</p>
      <p>Tax: {tax}%</p>
      <p>Availability: {availability}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Item;;