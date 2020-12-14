import axios from "axios";
import { USER_LOGIN, USER_AUTH, USER_LOGOUT, USER_SIGNUP } from "../types";

/*========= USER ===========*/
// const BASE_URL = 'https://pet-haven-api.herokuapp.com';
// const BASE_URL = 'http://localhost:5000';
export function loginUser({ email, password }) {
  const request = axios
    .post("/api/users/login", { email, password })
    .then((response) => response.data);

  return {
    type: USER_LOGIN,
    payload: request,
  };
}

export function auth() {
  const request = axios
    .get("/api/users/auth")
    .then((response) => response.data);

  return {
    type: USER_AUTH,
    payload: request,
  };
}

export function logoutUser() {
  const request = axios.get("/api/users/logout").then((response) => {
    return null;
  });
  return {
    type: USER_LOGOUT,
    payload: request,
  };
}

export function signupUser({
  email,
  password,
  firstname,
  lastname,
  address1,
  address2,
  phone,
  city,
  state,
  country,
  zipcode,
  role,
}) {
  const request = axios
    .post("/api/users/register", {
      email,
      password,
      firstname,
      lastname,
      address1,
      address2,
      phone,
      city,
      state,
      country,
      zipcode,
      role,
    })
    .then((response) => response.data);

  return {
    type: USER_SIGNUP,
    payload: request,
  };
}
