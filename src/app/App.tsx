// import React from "react";
// import { Box, Button, Container, Stack, Typography } from "@mui/material";
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
import "../css/app.css";
import "../css/navbar.css";
import "../css/footer.css";
import ScrollToTop from "./components/ScrollToTop";
import useBasket from "./hooks/useBasket";

function App() {
  const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = useBasket();
  return (
    <>
      <ScrollToTop />
      <HomeNavbar
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
        onDelete={onDelete}
        onDeleteAll={onDeleteAll}
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
    </>
  );
}

export default App;
