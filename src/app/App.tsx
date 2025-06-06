import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import {
  HomePage,
  ProductsPage,
  OrdersPage,
  UserPage,
  HelpPage,
} from "./screens";
import HomeNavbar from "./components/headers/HomeNavbar";
import Footer from "./components/footer";
import ScrollToTop from "./components/ScrollToTop";
import useBasket from "./hooks/useBasket";
import AuthenticationModal from "./components/auth";
import { sweetErrorHandling, sweetTopSuccessAlert } from "../lib/sweetAlert";
import { Messages } from "../lib/config";
import MemberService from "./services/MemberService";
import { useGlobals } from "./hooks/useGlobals";
import "../css/app.css";
import "../css/navbar.css";
import "../css/footer.css";

function App() {
  const { setAuthMember } = useGlobals();
  const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = useBasket();
  const [signupOpen, setSignupOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  //Handlers

  const handleSignupClose = () => setSignupOpen(false);
  const handleLoginClose = () => setLoginOpen(false);
  const handleLogoutClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseLogout = () => setAnchorEl(null);
  const handleLogoutRequest = async () => {
    try {
      const member = new MemberService();
      await member.logout();
      await sweetTopSuccessAlert("success", 700);
      setAuthMember(null);
    } catch (error) {
      console.log(error);
      sweetErrorHandling(Messages.error1);
    }
  };
  return (
    <>
      <ScrollToTop />
      <HomeNavbar
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
        onDelete={onDelete}
        onDeleteAll={onDeleteAll}
        setSignupOpen={setSignupOpen}
        setLoginOpen={setLoginOpen}
        anchorEl={anchorEl}
        handleLogoutClick={handleLogoutClick}
        handleCloseLogout={handleCloseLogout}
        handleLogoutRequest={handleLogoutRequest}
      />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/products">
          <ProductsPage onAdd={onAdd} />
        </Route>
        <Route path="/orders" component={OrdersPage} />
        <Route path="/member-page" component={UserPage} />
        <Route path="/help" component={HelpPage} />
      </Switch>
      <Footer />
      <AuthenticationModal
        signupOpen={signupOpen}
        loginOpen={loginOpen}
        handleLoginClose={handleLoginClose}
        handleSignupClose={handleSignupClose}
      />
    </>
  );
}

export default App;
