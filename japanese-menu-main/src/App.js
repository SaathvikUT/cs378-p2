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
        />
      ))}
    </div>
  );
}

export default App;