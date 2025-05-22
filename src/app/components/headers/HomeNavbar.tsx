import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import Basket from "./Basket";
import { CartItem } from "../../../lib/types/search";
import { useGlobals } from "../../hooks/useGlobals";
import { serverApi } from "../../../lib/config";
import { Logout } from "@mui/icons-material";

interface HomeNavbarProps {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
  setSignupOpen: (isOpen: boolean) => void;
  setLoginOpen: (isOpen: boolean) => void;
  handleLogoutClick: (e: React.MouseEvent<HTMLElement>) => void;
  anchorEl: HTMLElement | null;
  handleCloseLogout: () => void;
  handleLogoutRequest: () => void;
}
const HomeNavbar = (props: HomeNavbarProps) => {
  const {
    cartItems,
    onAdd,
    onDelete,
    onDeleteAll,
    onRemove,
    setLoginOpen,
    setSignupOpen,
    handleLogoutClick,
    anchorEl,
    handleCloseLogout,
    handleLogoutRequest,
  } = props;
  const [scrolled, setScrolled] = useState(false);
  const { authMember } = useGlobals();
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
                <Button
                  variant="contained"
                  className="login-btn"
                  onClick={() => {
                    setLoginOpen(true);
                  }}
                >
                  Login
                </Button>
              </Box>
            ) : (
              <img
                className="profile-img"
                src={
                  authMember.memberImage
                    ? `${serverApi}/${authMember.memberImage}`
                    : "/icons/default-user.svg"
                }
                aria-haspopup={"true"}
                onClick={handleLogoutClick}
              />
            )}

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={Boolean(anchorEl)}
              onClose={handleCloseLogout}
              onClick={handleCloseLogout}
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
              <MenuItem onClick={handleLogoutRequest}>
                <ListItemIcon>
                  <Logout fontSize="small" style={{ color: "blue" }} />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
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
                  <Button
                    onClick={() => {
                      setSignupOpen(true);
                    }}
                    variant="contained"
                    className="signup-button"
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
