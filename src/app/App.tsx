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
import { HomeNavbar } from "./components/headers/HomeNavbar";
import { Footer } from "./components/footer";
import "../css/app.css";
import "../css/navbar.css";

function App() {
  return (
    <>
      <HomeNavbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/orders" component={OrdersPage} />
        <Route path="/member-page" component={UserPage} />
        <Route path="/help" component={HelpPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
