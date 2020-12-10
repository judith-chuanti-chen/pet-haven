import {
  faHome,
  faSignInAlt,
  faSignOutAlt,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";

export const RouteLinks = {
  user: [
    {
      icon: faHome,
      text: "Home",
      link: "/",
      color: "black",
    },
    {
      icon: faSignInAlt,
      text: "Login",
      link: "/log-in",
      color: "black",
      restricted: true
    },
  ],

  admin: [
    {
      icon: faHome,
      text: "Admin",
      link: "/admin",
      color: "black",
    },

    {
      icon: faSignOutAlt,
      text: "Logout",
      link: "/logout",
      color: "black",
    },
    {
      icon: faClipboard,
      text: "Edit Users",
      link: "/editUsers",
      color: "black",
    },
  ],
};
