import React, { useState } from "react";
import "./App.css";
import AppContext from "./AppContext";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Routes from "./Routes";

function App() {
  const [cartItems, setCartItemsState] = useState([]);
  const cart = {
    cartItems: cartItems,
    setCartItemsState,
  };

  // update with user profile when adding Auth to the app
  // const [setting2value, setSetting2value] = useState(false);

  return (
    <AppContext.Provider value={cart}>
      <div className="App">
        <Navbar />
        <Routes />
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
