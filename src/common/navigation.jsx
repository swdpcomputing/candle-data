import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <div class="container">
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav sm-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/timeline" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/timeline">
                  Timeline
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
