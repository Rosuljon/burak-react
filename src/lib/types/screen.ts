import { Member } from "./member";
import { Product } from "./product";

// REACT APP STATE
export interface AppRootState {
  homePage: HomePageState;
}

// Home Page
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

//Product Page

//Order Page
