import { Routes, Route } from 'react-router-dom'
import { Homepage, Productpage, CartPage, WishlistPage, SignupPage, LoginPage } from './pages/index.js'
import Mockman from "mockman-js";
import "./App.css";
import { useAuth } from './context/auth-context'
function App() {

  const { auth } = useAuth();

  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/products" element={<Productpage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="mockman" element={<Mockman />} />
      </Routes>

    </div>
  );
}

export default App;
