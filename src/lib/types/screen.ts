import { Member } from "./member";
import { Order } from "./order";
import { Product } from "./product";

// REACT APP STATE
export interface AppRootState {
  homePage: HomePageState;
  productsPage: ProductPageState;
  ordersPage: OrdersPageState;
}

// Home Page
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

//Product Page
export interface ProductPageState {
  restaurant: Member | null;
  chosenProduct: Product | null;
  products: Product[];
}

//Order Page
export interface OrdersPageState {
  pausedOrders: Order[];
  processOrders: Order[];
  finishedOrders: Order[];
}
