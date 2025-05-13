import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Ads from "./Ads";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";
import Test from "../Test";
import { useEffect } from "react";

export function HomePage() {
  useEffect(() => {}, []);

  return (
    <div className="homepage">
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Ads />
      <ActiveUsers />
      <Events />
    </div>
  );
}
