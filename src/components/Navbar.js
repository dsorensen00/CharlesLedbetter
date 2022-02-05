import { React } from "react";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          Ledbetter COVID Testing
        </a>
        {location.pathname !== "/" ? (
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}
