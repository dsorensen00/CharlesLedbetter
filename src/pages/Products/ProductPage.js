import React, { useContext } from "react";
import AppContext from "../../AppContext";

export default function ProductPage() {
  const myContext = useContext(AppContext);
  const addToCart = (title, description, price) => {
    let cartItem = {
      title: title,
      description: description,
      price: price,
    };
    myContext &&
      myContext.cartItems.setCartItemsState(
        myContext.cartItems.append(cartItem)
      );
  };
  return (
    <>
      <button
        onClick={addToCart(
          "YoMomma",
          "YoMomma So Fat She Thought A Bus Was A Twinkie!",
          5
        )}
      ></button>
    </>
  );
}
