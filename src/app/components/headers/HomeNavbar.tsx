import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

export const HomeNavbar = () => {
  const authMember = null;
  return (
    <div className="home-navbar">
      <Container sx={{ mt: "55px", height: "642px" }}>
        <Stack
          sx={{ height: "50px", color: "white" }}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignContent={"center"}
        >
          <Box>
            <NavLink to="/">
              <img
                src="/icons/burak.svg"
                alt="Logo"
                style={{ width: "125px", height: "30px" }}
              />
            </NavLink>
          </Box>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            minWidth={"700px"}
          >
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
                <Button
                  variant="contained"
                  style={{ background: "#3776CC", color: "#f8f8ff" }}
                >
                  Login
                </Button>
              </Box>
            ) : (
              <img />
            )}
          </Stack>
        </Stack>
        <Stack>detail</Stack>
      </Container>
    </div>
  );
};
