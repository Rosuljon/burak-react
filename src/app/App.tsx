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
import { useState } from "react";
import { CartItem } from "../lib/types/search";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const cartJson: string | null = localStorage.getItem("cartData");
  const currentCart = cartJson ? JSON.parse(cartJson) : [];
  const [cartItems, setCartItems] = useState<CartItem[]>(currentCart);

  const onAdd = (input: CartItem) => {
    let cartUpdate;
    const exist: any = cartItems.find(
      (item: CartItem) => item._id === input._id
    );
    if (exist) {
      cartUpdate = cartItems.map((item: CartItem) =>
        item._id === input._id
          ? { ...exist, quantity: exist.quantity + 1 }
          : item
      );
    } else {
      cartUpdate = [...cartItems, { ...input }];
    }
    setCartItems(cartUpdate);
    localStorage.setItem("cartData", JSON.stringify(cartUpdate));
  };
  return (
    <>
      <ScrollToTop />
      <HomeNavbar cartItems={cartItems} />
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
