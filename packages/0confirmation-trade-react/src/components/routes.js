import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Main from "./main"
import NotFound from './notFound'

export default function Routes() {
    return (
    <Router>
      <Switch>
          <Route exact path="/" component={Main} />
          <Route>
            <NotFound />
          </Route>
    	</Switch>
    </Router>
  )
}