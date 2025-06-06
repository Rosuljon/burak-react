import React from "react";
import { Box, Button, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteForever from "@mui/icons-material/DeleteForever";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useHistory } from "react-router-dom";
import { CartItem } from "../../../lib/types/search";
import { Messages, serverApi } from "../../../lib/config";
import { useGlobals } from "../../hooks/useGlobals";
import OrderService from "../../services/OrderService";
import { sweetErrorHandling } from "../../../lib/sweetAlert";

interface BasketProps {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
}

export default function Basket(props: BasketProps) {
  const { cartItems, onAdd, onDelete, onDeleteAll, onRemove } = props;
  const { authMember, setOrderBuilder } = useGlobals();
  const history = useHistory();
  const itemsPrice = cartItems.reduce(
    (a: number, c: CartItem) => a + c.quantity * c.price,
    0
  );
  const delivery = itemsPrice >= 100 ? 0 : 5;
  const totalPrice = (itemsPrice + delivery).toFixed(2);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  /** HANDLERS **/
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const proceedOrderHandler = async () => {
    try {
      handleClose();
      if (!authMember) throw new Error(Messages.error2);
      const order = new OrderService();
      await order.createOrder(cartItems);

      onDeleteAll();
      setOrderBuilder(new Date());
      history.push("/orders");
    } catch (error) {
      console.log(error);
      sweetErrorHandling(error).then();
    }
  };
  return (
    <Box className={"hover-line"}>
      <IconButton
        aria-label="cart"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Badge badgeContent={cartItems.length} color="secondary">
          <img src={"/icons/shopping-cart.svg"} />
        </Badge>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        // onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Stack className={"basket-frame"}>
          <Box className={"all-check-box"}>
            {cartItems.length === 0 ? (
              <div>Cart is empty!</div>
            ) : (
              <Stack flexDirection={"row"}>
                <div>Cart Products:</div>
                {/* <DeleteForever sx={{ ml: "5px" }} onClick={onDeleteAll} /> */}
              </Stack>
            )}
          </Box>

          <Box className={"orders-main-wrapper"}>
            <Box className={"orders-wrapper"}>
              {cartItems.map((item: CartItem) => {
                const imagePath = `${serverApi}/${item.image}`;
                return (
                  <Box key={item._id} className={"basket-info-box"}>
                    <div className={"cancel-btn"}>
                      <CancelIcon
                        color={"primary"}
                        onClick={() => {
                          onDelete(item);
                        }}
                      />
                    </div>
                    <img src={imagePath} className={"product-img"} />
                    <span className={"product-name"}>{item.name}</span>
                    <p className={"product-price"}>
                      ${item.price} x {item.quantity}
                    </p>
                    <Box sx={{ minWidth: 120 }}>
                      <div className="col-2">
                        <button
                          onClick={() => {
                            onRemove(item);
                          }}
                          className="remove"
                        >
                          -
                        </button>{" "}
                        <button
                          onClick={() => {
                            onAdd(item);
                          }}
                          className="add"
                        >
                          +
                        </button>
                      </div>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
          {cartItems.length !== 0 ? (
            <div>
              <Box className={"basket-order"}>
                <div>
                  <span className={"price"}>Total: ${totalPrice}</span>
                  <small style={{ color: "#777" }}>
                    Products price: ${itemsPrice}
                  </small>
                  <br />
                  <small style={{ color: "#777" }}>
                    Delivery fee: {delivery === 0 ? "Free" : `$${delivery}`}
                  </small>
                </div>

                <Button
                  onClick={onDeleteAll}
                  startIcon={<DeleteForever />}
                  variant={"contained"}
                >
                  Clear
                </Button>
                <Button
                  onClick={proceedOrderHandler}
                  startIcon={<ShoppingCartIcon />}
                  variant={"contained"}
                >
                  Order
                </Button>
              </Box>

              <Box mt={1} width="100%">
                <small
                  style={{
                    color: "#555",
                    fontStyle: "italic",
                    fontSize: "13px",
                  }}
                >
                  * Orders over $100 qualify for <strong>free delivery</strong>.
                  A $5 delivery fee applies to orders below $100.
                </small>
              </Box>
            </div>
          ) : (
            ""
          )}
        </Stack>
      </Menu>
    </Box>
  );
}
