import React, { Fragment } from "react";
import { NavBar } from './navBar'

export default function NotFound() {
  return (
    <Fragment>
      <div className="App">
          <NavBar />
          <h3>Sorry, page not found!</h3>
      </div>
    </Fragment>
  );
}