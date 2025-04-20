import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

export const HomeNavbar = () => {
  const authMember = null;
  return (
    <div className="home-navbar">
      <Container className="navbar-container">
        <Stack className="menu">
          <Box>
            <NavLink to="/">
              <img src="/icons/burak.svg" alt="Logo" className="logo" />
            </NavLink>
          </Box>
          <Stack className="links">
            <Box className={"hover-line"}>
              <NavLink activeClassName="underline" to="/">
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
        <Stack>detail</Stack>
      </Container>
    </div>
  );
};
