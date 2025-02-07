import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
function MenuItem({ title, description, price, image }) {
    return (
      <div className="menu-item my-4 p-4 border rounded">
        <div className="row align-items-center">
          <div className="col-md-4">
            <img src={image} alt={title} className="img-fluid rounded" />
          </div>
          <div className="col-md-8">
            <h4>{title}</h4>
            <p className="mb-3 text-muted">{description}</p>
            <p>${price} <button className="btn btn-outline-primary btn-sm">Add</button></p>
          </div>
        </div>
      </div>
    );
  }
  


export default MenuItem;
