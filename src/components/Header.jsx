import React from "react";
import flipis from "../img/flipis.png";

export default function Header() {
  return (
    <header className="navbar row m-0 p-0">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <a class="navbar-brand" href="#">
          <img
            src={flipis}
            className="App-logo rounded-circle img-responsive"
            alt="logo"
          />
        </a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

{
  /* <div className="row">
          <div className="col-2">
            <img src={flipis} className="App-logo rounded-circle" alt="logo" />
          </div>
          <div className="col-10">
            {" "}
            <h1>Hola Flipi</h1>
          </div>
        </div> */
}
