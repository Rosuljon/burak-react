import React from "react";
import "../css/app.css";
// import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Route, Switch, useLocation } from "react-router-dom";
import { HomePage, ProductsPage, OrdersPage, UserPage } from "./screens";
import { HomeNavbar } from "./components/headers/HomeNavbar";
import { SecondaryNavbar } from "./components/headers/SecondaryNavbar";
import { Footer } from "./components/footer";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? <HomeNavbar /> : <SecondaryNavbar />}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/orders" component={OrdersPage} />
        <Route path="/member-page" component={UserPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
