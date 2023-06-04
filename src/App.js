// import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer'
// import Home from './components/Home'
// import About from './components/About'
// import Product from './components/Product'
// import Contact from './components/Contact'
// import { Redirect, Route, Switch } from 'react-router-dom';
// import ProductDetail from './components/ProductDetail';
// import Cart from './components/Cart';
// import Checkout from './components/Checkout'

// function App() {
//   return (
//     <>
//       <Header/>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/products" component={Product} />
//         <Route exact path="/products/:id" component={ProductDetail} />
//         <Route exact path="/cart" component={Cart} />
//         <Route exact path="/checkout" component={Checkout} />
//         <Route exact path="/about" component={About} />
//         <Route exact path="/contact" component={Contact} />
//         <Redirect to="/" />
//       </Switch>
//       <Footer/>
//     </>
//   );
// }

// export default App;








import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <Header />
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

