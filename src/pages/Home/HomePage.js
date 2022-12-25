import React from "react";
import OrderConfirmation from "../Checkout/components/OrderConfirmation";
import BannerNavbar from "./components/BannerNavbar";
import ShortAboutMe from "./components/ShortAboutMe";
import EMSSTAR from "../../assets/EMS_STAR.png"

export default function HomePage() {
  return (
    <>
      <div className="container">
        <div className="row">
          <img src={EMSSTAR} className="col-4"/>
            <div className="">
              <div className="row home-company-title">
                First Response Medical
              </div>
              <div className="row">
                lalal
              </div>
            </div>
            
        </div>
      </div>
      <div class="container">
        <BannerNavbar />
        <ShortAboutMe />
        <OrderConfirmation />
      </div>
    </>
  );
}
