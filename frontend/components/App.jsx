import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../utils/route_util";
import LandingPage from './landing/landing'
import LoginFormContainer from "./session/login/login_form_container";
import SignupFormContainer from "./session/signup/signup_form_container"
import DashboardContainer from "./dashboard/dashboard_container"

const App = () => (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        {/* <Route exact path="/" element={LandingPage} /> */}
        {/* <Route exact path='/' element={<LandingPage/>} /> */}
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </Switch>  
      <ProtectedRoute path="/dashboard" component={DashboardContainer} />
    </div>
  );
  
export default App;