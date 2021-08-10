import React from "react";
import logo from "../Image/logo.jpeg";

const nvaComponent = (data) => {
  return (
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">
        {data}
      </a>
    </li>
  );
};
export const NavbarHeader = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-primary static-top">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="logo" height="36" />
            <span _ngcontent-serverapp-c113="" class="ms-2">
              <strong>AWADHANCHAL IT GROUP</strong>
            </span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse space-around"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav ms-auto">
              {nvaComponent("Home")}
              {nvaComponent("About US")}
              {nvaComponent("Our Product")}
              {nvaComponent("Carrer")}
              {nvaComponent("Contact")}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
