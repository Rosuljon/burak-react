import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

const selectOrdersPage = (state: AppRootState) => state.ordersPage;
export const retrievePausedOrder = createSelector(
  selectOrdersPage,
  (OrdersPage) => OrdersPage.pausedOrders
);
export const retrieveProcessOrder = createSelector(
  selectOrdersPage,
  (OrdersPage) => OrdersPage.processOrders
);
export const retrieveFinishedOrder = createSelector(
  selectOrdersPage,
  (OrdersPage) => OrdersPage.finishedOrders
);
