import { useState } from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import Basket from "./Basket";

const HomeNavbar = () => {
  const authMember = null;
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [count, setCount] = useState(0);
  const buttonHandler = () => {
    setCount(count + 1);
  };
  return (
    <div
      className="home-navbar"
      style={{ height: isHomePage ? "773px" : "400px" }}
    >
      <Container className="navbar-container">
        <Stack className="menu">
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
            <Basket />
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
              <Box className="head-third-txt">{count} hours service</Box>
              <Box className="signup">
                {!authMember && (
                  <Button
                    variant="contained"
                    className="signup-button"
                    onClick={buttonHandler}
                  >
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
