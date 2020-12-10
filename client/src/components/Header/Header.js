import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MainNav from "./sidenav";
import { FilterNone } from "@material-ui/icons";

const Header = () => {
  const [mainNav, setMainNav] = useState(false);

  const ShowNav = () => {
    setMainNav(true);
  };

  const hideNav = () => {
    setMainNav(false);
  };

  return (
    <header>
      <div className="open-nav">
        <FontAwesomeIcon
          className="bars"
          icon={faBars}
          onClick={() => {
            ShowNav(true);
          }}
          style={{
            color: "black",
            padding: "10px",
            cursor: "pointer",
          }}
          size="3x"
        />
      </div>
      <MainNav showNav={mainNav} onHideNav={() => hideNav(false)} />
      <Link style={{ textDecoration: "None", color: "purple" }} to="/">
        Pet Haven
      </Link>
    </header>
  );
};
export default Header;
