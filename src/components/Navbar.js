import { React } from "react";
import { useLocation } from "react-router-dom";
import EMSSTAR from "../assets/EMS_STAR.png"

export default function Navbar() {
  const location = useLocation();

  return (
    <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand row" href="/">
          <img src={EMSSTAR} alt="EMS Star Logo" className="col-1" style={{width:"5%"}}/>
          First Response Medical
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
