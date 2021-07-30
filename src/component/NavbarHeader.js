import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

export const NavbarHeader = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-primary ">
        <div className="container-fluid ">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              <h3>Nidhi Bank Software</h3>
              <small>
                <i>software designed by Awdhancal IT group</i>
              </small>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
