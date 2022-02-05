import React from "react";
import Charles2 from "../../../assets/Charles2.jpg";

export default function ShortAboutMe() {
  return (
    <>
      <div class="bg-light m-5" style={{ maxWidth: "540px;" }}>
        <div class="row g-0">
          <div class="col-md-4 ">
            <img src={Charles2} class="card-img-top" alt="..." />
          </div>
          <div class="col-md-5 pt-5">
            <div class="card-body ">
              <h5 class="card-title">Meet your COVID tech!</h5>
              <p class="card-text">
                A seasoned and well certified EMT with many years of EMS under
                his belt. Charles Ledbetter, has extensive experience and
                knowledge when it comes COVID. Having worked the entire pandemic
                helping others, Charles is the obvious pick when you are picking
                who to see for your COVID solution needs.
              </p>
              <p class="card-text">
                <small class="text-muted">-Says pretty much everyone.</small>
              </p>
              <a href="/about-ledbetter">
                <button class="btn btn-outline-dark">Read More</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
