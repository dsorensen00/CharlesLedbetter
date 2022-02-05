import React from "react";

export default function OrderConfirmation() {
  return (
    <>
      <div class="container mt-4 mb-4">
        <div class="row d-flex cart align-items-center justify-content-center">
          <div class="col-md-10">
            <div class="card">
              <div class="d-flex justify-content-center border-bottom">
                <div class="p-3">
                  <div class="progresses">
                    <div class="steps">
                      {" "}
                      <span>
                        <i class="fa fa-check"></i>
                      </span>{" "}
                    </div>{" "}
                    <span class="line"></span>
                    <div class="steps">
                      {" "}
                      <span>
                        <i class="fa fa-check"></i>
                      </span>{" "}
                    </div>{" "}
                    <span class="line"></span>
                    <div class="steps">
                      {" "}
                      <span class="font-weight-bold">3</span>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div class="row g-0">
                <div class="col-md-6 border-right p-5">
                  <div class="text-center order-details">
                    <div class="d-flex justify-content-center mb-5 flex-column align-items-center">
                      {" "}
                      <span class="check1">
                        <i class="fa fa-check"></i>
                      </span>{" "}
                      <span class="font-weight-bold">Order Confirmed</span>{" "}
                      <small class="mt-2">
                        Your illustraion will go to you soon
                      </small>{" "}
                      <a href="#" class="text-decoration-none invoice-link">
                        View Invoice
                      </a>{" "}
                    </div>{" "}
                    <button class="btn btn-danger btn-block order-button">
                      Go to your Order
                    </button>
                  </div>
                </div>
                <div class="col-md-6 background-muted">
                  <div class="p-3 border-bottom">
                    <div class="d-flex justify-content-between align-items-center">
                      {" "}
                      <span>
                        <i class="fa fa-clock-o text-muted"></i> 3 days delivery
                      </span>{" "}
                      <span>
                        <i class="fa fa-refresh text-muted"></i> 2 Max Revisions
                      </span>{" "}
                    </div>
                    <div class="mt-3">
                      <h6 class="mb-0">Illustraion in Sketch or AI</h6>{" "}
                      <span class="d-block mb-0">
                        Includes: Sketch, PSD, PNG, SVG, AI{" "}
                      </span>{" "}
                      <small>Min: 1 illustraion</small>
                      <div class="d-flex flex-column mt-3">
                        {" "}
                        <small>
                          <i class="fa fa-check text-muted"></i> Vector file
                        </small>{" "}
                        <small>
                          <i class="fa fa-check text-muted"></i> Sources files
                        </small>{" "}
                      </div>
                    </div>
                  </div>
                  <div class="row g-0 border-bottom">
                    <div class="col-md-6 border-right">
                      <div class="p-3 d-flex justify-content-center align-items-center">
                        {" "}
                        <span>x3</span>{" "}
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="p-3 d-flex justify-content-center align-items-center">
                        {" "}
                        <span>$20 per unit</span>{" "}
                      </div>
                    </div>
                  </div>
                  <div class="row g-0 border-bottom">
                    <div class="col-md-6">
                      <div class="p-3 d-flex justify-content-center align-items-center">
                        {" "}
                        <span>Subtotal</span>{" "}
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="p-3 d-flex justify-content-center align-items-center">
                        {" "}
                        <span>$60</span>{" "}
                      </div>
                    </div>
                  </div>
                  <div class="row g-0 border-bottom">
                    <div class="col-md-6">
                      <div class="p-3 d-flex justify-content-center align-items-center">
                        {" "}
                        <span>Processing fees</span>{" "}
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="p-3 d-flex justify-content-center align-items-center">
                        {" "}
                        <span>$1.80</span>{" "}
                      </div>
                    </div>
                  </div>
                  <div class="row g-0">
                    <div class="col-md-6">
                      <div class="p-3 d-flex justify-content-center align-items-center">
                        {" "}
                        <span class="font-weight-bold">Total</span>{" "}
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="p-3 d-flex justify-content-center align-items-center">
                        {" "}
                        <span class="font-weight-bold">$61.80</span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div> </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
