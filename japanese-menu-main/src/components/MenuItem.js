import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
function MenuItem({ title, description, price, image, quantity, onAdd, onRemove }) {
  return (
    <div className="row mb-4">
      <div className="col-md-3">
        <img src={image} alt={title} className="img-fluid rounded" />
      </div>
      <div className="col-md-6">
        <h4>{title}</h4>
        <p>{description}</p>
        <p>${price.toFixed(2)}</p>
      </div>
      <div className="col-md-3 d-flex align-items-center">
        <button 
          className="btn btn-outline-secondary"
          onClick={onRemove}
        >
          -
        </button>
        <span className="mx-2">{quantity}</span>
        <button 
          className="btn btn-outline-secondary"
          onClick={onAdd}
        >
          +
        </button>
      </div>
    </div>
  );
}

  


export default MenuItem;
