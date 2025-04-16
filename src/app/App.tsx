import React from "react";
import "../css/app.css";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
// import { RippleBadge } from "./MaterialTheme/styled";
import { Link, Route, Switch } from "react-router-dom";
import { HomePage, ProductsPage, OrdersPage, UserPage } from "./screens";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/products">ProductsPage</Link>
          </li>
          <li>
            <Link to="/orders">OrdersPage</Link>
          </li>
          <li>
            <Link to="/member-page">UserPage</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/orders" component={OrdersPage} />
        <Route path="/member-page" component={UserPage} />
      </Switch>
    </div>
  );
}

export default App;
