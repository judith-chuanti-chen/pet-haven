import React, {useEffect} from "react";
import axios from 'axios';
import Home from "./components/Home";
import Search from "./components/Search";
import NavBar from "./components/NavBar";
import UserLogin from "./components/Users/UserLogin";
import UserSignup from "./components/Users/UserSignup";
import UserProfile from "./components/UserProfile";
import Admin from "./components/Users/Admin";
import UserLogout from "./components/Users/UserLogout";
import { useSelector } from "react-redux";
import EditUsers from "./components/Users/Admin/EditUsers";
import PetDetail from "./components/PetDetail";
import { createBrowserHistory } from "history";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useCookies } from "react-cookie";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./normalize.css";
import "./skeleton.css";

// Higher Order Component so all routes will use same layout
import MainLayout from "./HigherOrderComponents/MainLayout";
import Auth from "./HigherOrderComponents/auth";


const App = () => {
  const history = createBrowserHistory();
  // const [cookies, setCookie] = useCookies(["_csrf-pet-haven"]); 
  
  // const getCsrfToken = () =>{
  //   axios.get('/api/users/csrf')
  //   .then(res => {
  //     console.log(res);
  //   }).catch(err => {
  //     console.log(err);
  //   })
  // };

  useEffect(() => {
    // console.log(cookies);
    // getCsrfToken();
  });

  return (
    <>
      <BrowserRouter history={history}>
        <MainLayout>
          <Switch>
            <Route path="/admin" component={Auth(Admin, true)} />
            <Route path="/logout" component={Auth(UserLogout, true)} />
            <Route path="/sign-up" component={Auth(UserSignup, false)} />
            <Route path="/log-in" component={Auth(UserLogin, false)} />
            <Route path="/profile" component={Auth(UserProfile, true)} />
            <Route path="/pageDetail" component={Auth(PetDetail)} />
            <Route path="/search" component={Auth(Search)} />
            <Route path="/manage-users" component={Auth(EditUsers)}/>
            <Route exact path="/" component={Auth(Home)} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </>
  );
};

export default App;
