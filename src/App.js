import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { getCartFromStorage } from "./actions/cartActions";
import GlobalStyle from "./GlobalStyle";
import "./App.css";

import PrivateRoute from "./components/HOC/PrivateRoute";
import useSticky from "./components/hooks/useSticky";
import Cart from "./components/pages/Cart";
import DashBoard from "./components/pages/DashBoard";
import Home from "./components/pages/Home";
import NavBar from "./components/Navbar";
import Shop from "./components/pages/Shop";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import WineDetails from "./components/pages/Shop/WineDetails";
import FullPageLoader from "./components/cors/FullPageLoader";
import OptionModal from "./components/cors/optionModal";
import Subscription from "./components/pages/Subscription";
import Burger from "./components/burger";
import Menu from "./components/menu";

const CART_KEY = "jud-shop";

const App = props => {
  const { cartProps, userProps } = props;
  const [open, setOpen] = useState(false)
  const { isSticky, element } = useSticky();
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleUserAlert = () => {
    if (userProps.isAuth) {
      setIsOpen(true);
      console.log("switched to true", modalIsOpen);
    }
  };
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    props.getCartFromStorage();
    handleUserAlert();
    console.log("plop modal", userProps.isAuth, modalIsOpen)
  }, [userProps.isAuth]);

  useEffect(() => {
    // only strings in localStorage
    localStorage.setItem(CART_KEY, JSON.stringify(cartProps.cart));
  }, [cartProps]);

  return (
    <div>
      <GlobalStyle />
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      <NavBar sticky={isSticky} />

      <Switch>
        <Route
          exact
          path="/"
          render={props => <Home {...props} element={element} />}
        />
        <Route
          exact
          path="/boutique"
          render={props => <Shop {...props} element={element} />}
        />
        <Route
          path="/boutique/:id"
          render={props => <WineDetails {...props} element={element} />}
        />
        <Route
          exact
          path="/cart"
          render={props => <Cart {...props} element={element} />}
        />
        <Route path="/abonnement" component={Subscription} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <PrivateRoute path="/dashboard" component={DashBoard} />
      </Switch>
      {/* <OptionModal alertUser={modalIsOpen} closeModal={closeModal} /> */}
      <FullPageLoader />
    </div>
  );
};
const mapStateToProps = (state, props) => ({
  cartProps: state.cartState,
  userProps: state.userState,
  wineProps: state.wineState
});

export default connect(mapStateToProps, { getCartFromStorage })(App);
