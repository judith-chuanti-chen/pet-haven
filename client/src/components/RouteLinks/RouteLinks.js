import {
  faHome,
  faSignInAlt,
  faSignOutAlt,
  faUserPlus,
  faClipboard,
  faUserCircle,
  faUserCog
} from "@fortawesome/free-solid-svg-icons";

export const RouteLinks = {
  visitor: [
    {
      icon: faHome,
      text: "Home",
      link: "/",
      color: "black",
    },
    {
      icon: faSignInAlt,
      text: "Log In",
      link: "/log-in",
      color: "black",
      restricted: true,
    },
    {
      icon: faUserPlus,
      text: "Sign Up",
      link: "/sign-up",
      color: "black",
      restricted: true,
    },
  ],
  
  user: [
    {
      icon: faHome,
      text: "Home",
      link: "/",
      color: "black",
    },
    {
      icon: faUserCircle,
      text: "My Profile",
      link: "/profile",
      color: "black",
    },

    {
      icon: faSignOutAlt,
      text: "Log Out",
      link: "/logout",
      color: "black",
    },
  ],

  admin: [
    {
      icon: faHome,
      text: "Home",
      link: "/",
      color: "black",
    },
    {
      icon: faUserCog,
      text: "Admin",
      link: "/admin",
      color: "black",
    },

    {
      icon: faSignOutAlt,
      text: "Log Out",
      link: "/logout",
      color: "black",
    },
    {
      icon: faClipboard,
      text: "Manage Users",
      link: "/manage-users",
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
