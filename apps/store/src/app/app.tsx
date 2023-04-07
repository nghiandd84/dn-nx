import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const Product = React.lazy(() => import('product/Module'));

const Checkout = React.lazy(() => import('checkout/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/product">Product</Link>
        </li>

        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="store" />} />

        <Route path="/product" element={<Product />} />

        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
