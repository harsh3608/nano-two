import React from "react";
import "./style.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import About from "./About";
import NotFound from "./NotFound";

let NavBar = (props) => {

  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand px-4" >
            React Nano Two
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse d-flex justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto ">
              <Route path="/home">
                {() => (
                  <li className="nav-item active">
                    <Link className="nav-link" to="/home">
                      Home
                    </Link>
                  </li>
                )}
              </Route>
              &nbsp;&nbsp;
              <Route path="/register">
                {() => (
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                )}
              </Route>
              &nbsp;&nbsp;
              <Route path="/about">
                {() => (
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                )}
              </Route>
            </ul>

            <form className="form-inline my-2 my-lg-0 d-flex px-4">
              <input
                className="form-control mr-sm-2 mx-3"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>

        <div>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default NavBar;
