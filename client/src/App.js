import React, { Component } from "react";
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import LocationsPage from "./pages/LocationsPage";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/locations">
            <LocationsPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/menu">
            <MenuPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path={["/", "home"]}>
            <Home />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
