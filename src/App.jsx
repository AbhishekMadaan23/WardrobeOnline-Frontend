// import { Home } from "./pages/Home";
// import { ProductList } from "./pages/ProductList";
// import Product from "./pages/Product";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Cart from "./pages/Cart";

// import {
//   BrowserRouter as Router,
//   Link,
//   Route,
//   Routes,
//   Redirect,
// } from "react-router-dom";

// const App = () => {
//   const user = false;

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route exact path="/products/:category" element={<ProductList />} />
//         <Route exact path="/product/:id" element={<Product />} />
//         <Route exact path="/cart" element={<Cart />} />
//         <Route exact path="/login" element={user ? <Home /> : <Login />} />
//         <Route
//           exact
//           path="/register"
//           element={user ? <Home /> : <Register />}
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
