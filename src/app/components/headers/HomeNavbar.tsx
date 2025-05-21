import { useState, useEffect } from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import Basket from "./Basket";
import { CartItem } from "../../../lib/types/search";

interface HomeNavbarProps {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
}
const HomeNavbar = (props: HomeNavbarProps) => {
  const { cartItems, onAdd, onDelete, onDeleteAll, onRemove } = props;
  const [scrolled, setScrolled] = useState(false);
  const authMember = null;
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (isHomePage) {
        setScrolled(offset > 930);
      } else {
        setScrolled(offset > 350); // 100px dan keyin fon chiqaramiz
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <div
      className="home-navbar"
      style={{ height: isHomePage ? "773px" : "400px" }}
    >
      <Container className="navbar-container">
        <Stack className={`menu ${scrolled ? "scrolled" : ""}`}>
          <Box>
            <NavLink to="/">
              <img src="/icons/burak.svg" alt="Logo" className="logo" />
            </NavLink>
          </Box>
          <Stack className="links">
            <Box className={"hover-line"}>
              <NavLink exact activeClassName="underline" to="/">
                Home
              </NavLink>
            </Box>
            <Box className={"hover-line"}>
              <NavLink activeClassName="underline" to="/products">
                Products
              </NavLink>
            </Box>
            {authMember && (
              <Box className={"hover-line"}>
                <NavLink activeClassName="underline" to="/orders">
                  Orders
                </NavLink>
              </Box>
            )}
            {authMember && (
              <Box className={"hover-line"}>
                <NavLink activeClassName="underline" to="/member-page">
                  My Page
                </NavLink>
              </Box>
            )}
            <Box className={"hover-line"}>
              <NavLink activeClassName="underline" to="/help">
                Help
              </NavLink>
            </Box>
            <Basket
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              onDelete={onDelete}
              onDeleteAll={onDeleteAll}
            />
            {!authMember ? (
              <Box>
                <Button variant="contained" className="login-btn">
                  Login
                </Button>
              </Box>
            ) : (
              <img
                className="profile-img"
                src="/icons/default-user.svg"
                aria-haspopup={"true"}
              />
            )}
          </Stack>
        </Stack>
        {isHomePage && (
          <Stack className="header-frame">
            <Stack className="detail">
              <Box className="head-main-txt">
                World's Most Delicious Cousine
              </Box>
              <Box className="head-second-txt">
                The Choice, not just a choice
              </Box>
              <Box className="head-third-txt">24 hours service</Box>
              <Box className="signup">
                {!authMember && (
                  <Button variant="contained" className="signup-button">
                    Sign Up
                  </Button>
                )}
              </Box>
            </Stack>
            <Stack className="logo-frame">
              <div className="logo-img"></div>
            </Stack>
          </Stack>
        )}
      </Container>
    </div>
  );
};

export default HomeNavbar;
