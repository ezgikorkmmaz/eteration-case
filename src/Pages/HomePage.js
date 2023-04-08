import Checkout from '../Components/Checkout';
import ShoppingCards from '../Components/ShoppingCards';
import './style.scss';

function App() {
  return (
      <div className="menu-container">
     <Checkout />
      <ShoppingCards />
      <Checkout />
      </div>
  );
}

export default App;
