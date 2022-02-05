import React from "react";

export default function CartItem(code, discountAmount) {
  return (
    <>
      <li class="list-group-item d-flex justify-content-between bg-light">
        <div class="text-success">
          <h6 class="my-0">Promo code</h6>
          <small>{code}</small>
        </div>
        <span class="text-success">-${discountAmount}</span>
      </li>
    </>
  );
}
