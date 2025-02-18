import './App.css';
import MenuItem from './components/MenuItem';
import 'bootstrap/dist/css/bootstrap.min.css';

// Menu data
const menuItems = [
  {
    id: 1,
    title: 'Pasta Marinara',
    description: 'Homemade penne pasta with marinara sauce.',
    image: 'https://assets.epicurious.com/photos/5988e3458e3ab375fe3c0caf/1:1/w_3607,h_3607,c_limit/How-to-Make-Chicken-Alfredo-Pasta-hero-02082017.jpg',
    price: 10.25
  },
  {
    id: 2,
    title: 'House Salad',
    description: 'Mixed greens with onions, tomatoes, and cheese.',
    image: 'https://www.peelwithzeal.com/wp-content/uploads/2023/01/house-salad-recipe.jpg',
    price: 6.95
  },
  {
    id: 3,
    title: 'Margarita Pizza',
    description: 'Pizza crust with tomatoes, basil, and cheese.',
    image: 'https://www.abeautifulplate.com/wp-content/uploads/2015/08/the-best-homemade-margherita-pizza-1-4-500x500.jpg',
    price: 9.25
  },
  {
    id: 4,
    title: 'French Fries',
    description: 'Crispy fried potatoes served with ketchup and ranch.',
    image: 'https://www.recipetineats.com/tachyon/2022/09/Crispy-Fries_8.jpg',
    price: 4.25
  }
];

function App() {

  const [cartItems, setCartItems] = useState(
    menuItems.reduce((acc, item) => ({
      ...acc,
      [item.id]: 0
    }), {})
  );

  const calculateTotal = () => {
    return Object.entries(cartItems).reduce((total, [itemId, quantity]) => {
      const item = menuItems.find(item => item.id === parseInt(itemId));
      return total + (item.price * quantity);
    }, 0);
  };

  const addToCart = (itemId) => {
    setCartItems(prev => ({
      ...prev,
      [itemId]: prev[itemId] + 1
    }));
  };

  const removeFromCart = (itemId) => {
    if (cartItems[itemId] > 0) {
      setCartItems(prev => ({
        ...prev,
        [itemId]: prev[itemId] - 1
      }));
    }
  };

  const clearCart = () => {
    setCartItems(
      menuItems.reduce((acc, item) => ({
        ...acc,
        [item.id]: 0
      }), {})
    );
  };

  const handleOrder = () => {
    const orderItems = Object.entries(cartItems)
      .filter(([_, quantity]) => quantity > 0)
      .map(([itemId, quantity]) => {
        const item = menuItems.find(item => item.id === parseInt(itemId));
        return `${item.title}: ${quantity}`;
      });

    if (orderItems.length === 0) {
      alert('No items in cart');
    } else {
      alert(`Order placed!\n\nOrder details:\n${orderItems.join('\n')}`);
    }
  };



  return (
    <div className="container">
      <div className="container my-5 text-center">
        <img 
          src="https://www.oscampuscafe.com/wp-content/uploads/2019/12/ut-campus-cafe-schema.png" 
          alt="Banner Image" 
          className="img-fluid mb-3 rounded small-image" 
        />
        <p className="text-muted fancy-text">Delicious, From-Scratch Recipes Close at Hand</p>
        <h3 className="text-success">The Fresh Choice of UT!</h3>
      </div>

      {menuItems.map(item => (
        <MenuItem 
          key={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          image={item.image}
          quantity={cartItems[item.id]}
          onAdd={() => addToCart(item.id)}
          onRemove={() => removeFromCart(item.id)}
        />
      ))}

      <div className="text-center mt-4">
        <h4>Subtotal: ${calculateTotal().toFixed(2)}</h4>
        <button 
          className="btn btn-danger m-2"
          onClick={clearCart}
        >
          Clear All
        </button>
        <button 
          className="btn btn-success m-2"
          onClick={handleOrder}
        >
          Order
        </button>
      </div>
    </div>
  );
}

export default App;