import React from "react";
import { Link, withRouter } from "react-router-dom";
import { isAuthenticated, signout } from "../auth";

const isActive = (history, path) => {
  if (history.location.pathname === path) return { color: "#ff9900" };
  else return { color: "#ffffff" };
};

const Menu = ({ history }) => (
  <div>
    <ul className="nav nav-tabs bg-primary">
      <li className="nav-item">
        <Link className="nav-link" style={isActive(history, "/")} to="/">
          Home
        </Link>
      </li>
      {!isAuthenticated() && (
        <React.Fragment>
          <li className="nav-item">
            <Link
              className="nav-link"
              style={isActive(history, "/signin")}
              to="/signin"
            >
              Sign In
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              style={isActive(history, "/signup")}
              to="/signup"
            >
              Sign Up
            </Link>
          </li>
        </React.Fragment>
      )}
      {isAuthenticated() && (
        <>
          <li className="nav-item">
            <a
              className="nav-link"
              style={{ cursor: "pointer", color: "#fff" }}
              onClick={() => signout(() => history.push("/"))}
            >
              Sign Out
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              {`${isAuthenticated().user.name}'s profile`}
            </a>
          </li>
        </>
      )}
      {/*JSON.stringify(props.history)*/}
    </ul>
  </div>
);

export default withRouter(Menu);
