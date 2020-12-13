import {
  faHome,
  faSignInAlt,
  faSignOutAlt,
  faUserAlt,
  faClipboard,
  faUserCircle,
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
      restricted: true,
    },
    {
      icon: faUserAlt,
      text: "Sign Up",
      link: "/sign-up",
      color: "black",
      restricted: true,
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
    {
      icon: faUserCircle,
      text: "Profile",
      link: "/profile",
      color: "black",
    },
  ],
};
