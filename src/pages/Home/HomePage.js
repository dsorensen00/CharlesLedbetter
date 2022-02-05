import React from "react";
import OrderConfirmation from "../Checkout/components/OrderConfirmation";
import BannerNavbar from "./components/BannerNavbar";
import ShortAboutMe from "./components/ShortAboutMe";

export default function HomePage() {
  return (
    <>
      {/* <div class="row justify-content-around">
        <div class="fill col-10">
          <img src={TestImage} />
        </div>
      </div> */}
      <div className="home-heading">
        <div class="home-heading">
          <h1>COVID-19</h1>
          <h1>COVID-19</h1>
        </div>
        <p>
          Testing solutions you can trust.
          <br />
          <a href="/checkout">
            <button class="btn btn-outline-danger btn-small">Get Tested</button>
          </a>
        </p>
      </div>
      <div class="container">
        <BannerNavbar />
        <ShortAboutMe />
        <OrderConfirmation />
      </div>
    </>
  );
}
