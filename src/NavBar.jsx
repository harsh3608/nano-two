import React from "react";
import "./style.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from './Home';
import Register from './Register';
import About from './About';
import NotFound from './NotFound';

// const NavBar = () => (
//     <div>
//       <span>hello</span>
//     </div>
//   )

let NavBar = props => {
  const Teams = props => {
    const navigate = () => {
      const userID = 123;
      props.history.push(`/player/${userID}`);
    };

    return (
      <div className="panel-default">
        <div className="panel-body">
          Teams Page
          <div>
            <button className="btn btn-primary" onClick={navigate}>
              Go to Player
            </button>
          </div>
        </div>
      </div>
    );
  };

  // const Home = props => {
  //   return (
  //     <div className="panel-default">
  //       <div className="panel-body">
  //         <div>Home Page</div>
  //       </div>
  //     </div>
  //   );
  // };

  // const Player = props => {
  //   const playerId = props.match.params;
  //   return (
  //     <div className="panel-default">
  //       <div className="panel-body">
  //         <div>Player Id: {playerId.id}</div>
  //       </div>
  //     </div>
  //   );
  // };

  // const NotFound = props => {
  //   const playerId = props.match.params;
  //   return (
  //     <div className="panel-default">
  //       <div className="panel-body">
  //         <div>Page Not Found</div>
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div>
      <h1>Routing Example</h1>
      <BrowserRouter>
        <ul className="nav nav-tabs">
          <Route path="/home">
            {({ match }) => (
              <li className={match ? "active" : ""}>
                <Link to="/home">Home</Link>
              </li>
            )}
          </Route>
          <Route path="/register">
            {({ match }) => (
              <li className={match ? "active" : ""}>
                <Link to="/register">Register</Link>
              </li>
            )}
          </Route>
          <Route path="/about">
            {({ match }) => (
              <li className={match ? "active" : ""}>
                <Link to="/about">About</Link>
              </li>
            )}
          </Route>
        </ul>

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
