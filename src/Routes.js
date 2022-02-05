import React from "react";
import { Switch, Route } from "react-router-dom";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import ContactForm from "./pages/Contact/ContactForm";
import HomePage from "./pages/Home/HomePage";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/contact" component={ContactForm} />
      <Route path="/checkout" component={CheckoutPage} />
    </Switch>
  );
}

export default Routes;
