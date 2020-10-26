import React, { Component } from "react";
import "./App.css";
import HomePage from "./components/HomePage.jsx";
import About from "./components/About.jsx";
import Play from "./components/Play.jsx";
import Gallery from "./components/Gallery.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Router>
          <nav className="navbar">
            <div className="navbar-container">
              <Link to="/" className="nav-logo">
                D
              </Link>
              <ul className="nav-menu">
                <li className="nav-item">
                  <Link to="/about" className="nav-links">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/play" className="nav-links">
                    Play
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/gallery" className="nav-links">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Switch>
            <Route
              exact
              path="/"
              component={() => {
                return <HomePage />;
              }}
            />
            <Route
              exact
              path="/about"
              component={() => {
                return <About />;
              }}
            />
            <Route
              exact
              path="/gallery"
              component={() => {
                return <Gallery />;
              }}
            />
            <Route
              exact
              path="/play"
              component={() => {
                return <Play />;
              }}
            />
          </Switch>
        </Router>
      </>
    );
  }
}
