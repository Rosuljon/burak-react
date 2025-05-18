import { Member } from "./member";
import { Product } from "./product";

// REACT APP STATE
export interface AppRootState {
  homePage: HomePageState;
  productsPage: ProductPageState;
}

// Home Page
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}
export interface ProductPageState {
  restaurant: Member | null;
  chosenProduct: Product | null;
  products: Product[];
}

//Product Page

//Order Page
