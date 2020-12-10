import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { RouteLinks } from "../RouteLinks/RouteLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";

const NavItems = (props) => {
  const element = (item, i) => (
    <div key={i} className="navItem">
      <Link onClick={props.onHideNav} to={item.link}>
        <FontAwesomeIcon
          className="sideNav-icon"
          color={item.color}
          icon={item.icon}
        />
        {item.text}
      </Link>
    </div>
  );

  const showLinks = () =>
    RouteLinks.user.map((item, i) => {

        if(props.user.auth && item.restricted){
            return null
        }else {
            return element(item,i)
        }
    });

  const showAdminLinks = () =>
    RouteLinks.admin.map((item, i) => {
      return element(item, i);
    });

  return (
    <div>
      {showLinks()}
      { props.user.auth ?
                <div>
                    <div className="nav_split">
                        Admin options
                    </div>
                    {showAdminLinks()}
                </div>
            :null}
    </div>
  );
};

function mapStateToProps(state){
  return{
      user:state.user
  }
}

export default connect(mapStateToProps)(NavItems);
