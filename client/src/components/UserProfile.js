import { React, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import img from "../blank-profile-picture-973460_640.png";
import UserUpdate from "./Users/UserUpdate";
import { useSelector } from "react-redux";
import FavoritePetHolder from "./FavoritePetHolder";

const UserProfile = ({ props, location }) => {
  const [active, setActive] = useState([false, true]);
  let user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  }, []);

  const handleClick = (e) => {
    let newArr = active.map((entry) => {
      return (entry = !entry);
    });
    setActive(newArr);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-img">
          <img src={img} style={{ width: "250px" }} alt="" />
        </div>
        <div className="profile-nav-info">
          <h3>
            {user.userData.firstname} {user.userData.lastname}
          </h3>
          <div className="address">
            <p className="state">
              {user.userData.city}, {user.userData.state}
            </p>
            <span className="country">USA, {user.userData.zipcode}</span>
          </div>
        </div>
      </div>
      <div className="main-body">
        <div className="left-side">
          <div className="profile-side">
            <p className="mobile-number">
              <FontAwesomeIcon
                style={{ marginRight: "5px" }}
                icon={faPhone}
              ></FontAwesomeIcon>
              {user.userData.phone}
            </p>
            <p className="email">
              <FontAwesomeIcon
                style={{ marginRight: "5px" }}
                icon={faMailBulk}
              ></FontAwesomeIcon>
              {user.userData.email}
            </p>
            <div className="user-bio">
              <p style={{ fontWeight: "bold" }}>About Me</p>
              <p>{user.userData.about}</p>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="mini-nav">
            <ul>
              <li
                onClick={active[0] ? null : handleClick}
                className={`${active[0] ? "active" : ""} fav-pets`}
              >
                Your Favorited Pets
              </li>
              <li
                onClick={active[1] ? null : handleClick}
                className={`${active[1] ? "active" : ""} update-profile`}
              >
                Update Profile
              </li>
            </ul>
          </div>
          <div
            className={`${
              active[1] ? "displayed" : "not-displayed"
            } update-form`}
          >
            <UserUpdate />
          </div>
          <div
            className={`${
              active[0] ? "displayed" : "not-displayed"
            } fav-pet-holder`}
          >
            <FavoritePetHolder setActive={setActive}></FavoritePetHolder>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
