import React from "react";
import Home from "./components/Home";
import Search from "./components/Search";
import NavBar from "./components/NavBar";
import UserLogin from "./components/Users/UserLogin";
import UserSignup from "./components/Users/UserSignup";
import Admin from "./components/Users/Admin";
import UserLogout from "./components/Users/UserLogout";
import { createBrowserHistory } from "history";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import "./normalize.css";
import "./skeleton.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Higher Order Component so all routes will use same layout
import MainLayout from "./HigherOrderComponents/MainLayout";
import Auth from "./HigherOrderComponents/auth";

const App = () => {
  const history = createBrowserHistory();
  return (
    <>
      <BrowserRouter history={history}>
        <MainLayout>
          <NavBar />
          <Switch>
            <Route path="/admin" component={Auth(Admin,true)}/>
            <Route path="/logout" component={Auth(UserLogout,true)}/>
            <Route path="/sign-up" component={Auth(UserSignup, false)} />
            <Route path="/log-in" component={Auth(UserLogin, false)} />
            <Route path="/search" component={Search} />
            <Route exact path="/" component={Auth(Home)} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </>
  );
};

export default App;
