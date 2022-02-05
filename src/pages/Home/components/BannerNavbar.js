import React from "react";

export default function BannerNavbar() {
  return (
    <nav class="navbar nav-pills flex-column flex-sm-row">
      <a
        class="flex-sm-fill text-sm-center nav-link active"
        aria-current="page"
        href="/"
      >
        Home
      </a>
      <a class="flex-sm-fill text-sm-center nav-link" href="/">
        Tests Available
      </a>
      <a class="flex-sm-fill text-sm-center nav-link" href="/about-ledbetter">
        About Ledbetter
      </a>
      {/* <a class="flex-sm-fill text-sm-center nav-link disabled">Disabled</a> */}
    </nav>
  );
}
