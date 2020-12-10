import React from "react";
import SideNav from "react-simple-sidenav";
import NavItems from "./NavItems";

const MainNav = (props) => {
  return (
    <SideNav
      showNav={props.showNav}
      onHideNav={props.onHideNav}
      navStyle={{
        background: "#F5FFFA",
        maxWidth: "200px",
      }}
    >
      <NavItems onHideNav={props.onHideNav} />
    </SideNav>
  );
};

export default MainNav;
