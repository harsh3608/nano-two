import React from "react";
import "./styles/style.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import NotFound from "./NotFound";

let NavBar = (props) => {

  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light ">
          <a className="navbar-brand px-4 text-dark" >
            <strong>React ShowTime</strong>
            
          </a>
          <button
            className="navbar-toggler text-white"
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
                    <Link className="nav-link text-dark" to="/home">
                      <strong>Home</strong>
                    </Link>
                  </li>
                )}
              </Route>
              &nbsp;&nbsp;
              <Route path="/login">
                {() => (
                  <li className="nav-item">
                    <Link className="nav-link text-dark" to="/login">
                      <strong>Login</strong>
                    </Link>
                  </li>
                )}
              </Route>
              &nbsp;&nbsp;
              <Route path="/about">
                {() => (
                  <li className="nav-item">
                    <Link className="nav-link text-dark" to="/about">
                      <strong>About</strong>
                    </Link>
                  </li>
                )}
              </Route>
            </ul>

            {/* <form className="form-inline my-2 my-lg-0 d-flex px-4">
              <input
                className="form-control mr-sm-2 mx-3"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form> */}
          </div>
        </nav>

        <div>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default NavBar;
