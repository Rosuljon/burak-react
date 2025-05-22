import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import {
  HomePage,
  ProductsPage,
  OrdersPage,
  UserPage,
  HelpPage,
} from "./screens";
import HomeNavbar from "./components/headers/HomeNavbar";
import Footer from "./components/footer";
import ScrollToTop from "./components/ScrollToTop";
import useBasket from "./hooks/useBasket";
import AuthenticationModal from "./components/auth";
import "../css/app.css";
import "../css/navbar.css";
import "../css/footer.css";

function App() {
  const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = useBasket();
  const [signupOpen, setSignupOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  //Handlers

  const handleSignupClose = () => setSignupOpen(false);
  const handleLoginClose = () => setLoginOpen(false);
  return (
    <>
      <ScrollToTop />
      <HomeNavbar
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
        onDelete={onDelete}
        onDeleteAll={onDeleteAll}
        setSignupOpen={setSignupOpen}
        setLoginOpen={setLoginOpen}
      />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/products">
          <ProductsPage onAdd={onAdd} />
        </Route>
        <Route path="/orders" component={OrdersPage} />
        <Route path="/member-page" component={UserPage} />
        <Route path="/help" component={HelpPage} />
      </Switch>
      <Footer />
      <AuthenticationModal
        signupOpen={signupOpen}
        loginOpen={loginOpen}
        handleLoginClose={handleLoginClose}
        handleSignupClose={handleSignupClose}
      />
    </>
  );
}

export default App;
