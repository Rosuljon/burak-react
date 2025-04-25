import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import ChosenProduct from "./ChosenProduct";
import Products from "./Products";
import "../../../css/products.css";
export function ProductsPage() {
  const products = useRouteMatch();
  return (
    <div className="products-page">
      <Switch>
        <Route path={`${products.path}/:productId`} component={ChosenProduct} />
        <Route path={`${products.path}`} component={Products} />
      </Switch>
    </div>
  );
}
