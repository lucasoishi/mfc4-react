import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { UserTable } from "./../pages/Users";
import { Navbar, Container } from "react-bootstrap";

export default function () {
  return (
    <Router>
      <Navbar expand="xl" variant="dark" bg="light">
        <Navbar.Brand>
          {" "}
          <NavLink to="/"> Home </NavLink>{" "}
        </Navbar.Brand>
        <Navbar.Brand>
          <NavLink to="/users"> Users </NavLink>
        </Navbar.Brand>
      </Navbar>

      <Switch>
        <Route path="/users">
          <UserTable />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <Container>
      <h2> Home </h2>
      Nothing to see here
    </Container>
  );
}
