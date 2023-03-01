import { CartProvider } from './Contexts/CartContext';
import { UserProvider } from './Contexts/UserContext/UserContext';
import Router from './routes';
import { GlobalStyles } from './styles/global';

const App = () => (
  <UserProvider>
    <CartProvider>
      <GlobalStyles />
      <Router />
    </CartProvider>
  </UserProvider>
);

export default App;
