import React, { Component } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { connect } from "react-redux";
import { updateUser } from "../../store/actions/user_actions";

const SignUpSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password is too short!")
    .required("Required Field"),
  firstname: Yup.string().required("Required Field"),
  lastname: Yup.string().required("Required Field"),
  address1: Yup.string().required("Required Field"),
  address2: Yup.string(),
  phone: Yup.string()
    .required("Required Field")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits"),
  city: Yup.string().required("Required Field"),
  state: Yup.string().required("Required Field"),
  country: Yup.string().required("Required Field"),
  zipcode: Yup.number().required("Required Field"),
  role: Yup.string(),
});

class UserUpdate extends Component {
  render() {
    return (
      <div style={{ marginTop: "20px" }} className="container form_container">
        <h1>Update Your Information</h1>
        <Formik
          initialValues={{
            password: "",
            firstname: this.props.user.userData.firstname,
            lastname: this.props.user.userData.lastname,
            address1: this.props.user.userData.address1,
            address2: "",
            phone: this.props.user.userData.phone,
            city: this.props.user.userData.city,
            state: this.props.user.userData.state,
            country: this.props.user.userData.country,
            zipcode: this.props.user.userData.zipcode,
            role: 0,
            about: this.props.user.userData.about,
          }}
          validationSchema={SignUpSchema}
          onSubmit={(values) => {
            console.log(values);
            this.props
              .dispatch(updateUser(this.props.user.userData._id, values))
              .then((response) => {});
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            touched,
            handleSubmit,
          }) => {
            return (
              <form onSubmit={handleSubmit}>
                <div>Password*</div>
                <div className="form-group">
                  <div className="twelve columns mt-2 mb-4">
                    <input
                      type="password"
                      name="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Enter Password"
                      value={values.password}
                      className="u-full-width"
                    ></input>
                    {errors.password && touched.password ? (
                      <div className="error-label">{errors.password}</div>
                    ) : null}
                  </div>
                </div>
                <div>Firstname*</div>
                <div className="form-group">
                  <div className="twelve columns mt-2 mb-4">
                    <input
                      type="firstname"
                      name="firstname"
                      onChange={handleChange}
                      placeholder="Enter Firstname"
                      value={values.firstname}
                      className="u-full-width"
                    ></input>
                    {errors.firstname && touched.firstname ? (
                      <div className="error-label">{errors.firstname}</div>
                    ) : null}
                  </div>
                </div>
                <div>Lastname*</div>
                <div className="form-group">
                  <div className="twelve columns mt-2 mb-4">
                    <input
                      type="lastname"
                      name="lastname"
                      onChange={handleChange}
                      placeholder="Enter Lastname"
                      value={values.lastname}
                      className="u-full-width"
                    ></input>
                    {errors.lastname && touched.lastname ? (
                      <div className="error-label">{errors.lastname}</div>
                    ) : null}
                  </div>
                </div>
                <div>Address1*</div>
                <div className="form-group">
                  <div className="twelve columns mt-2 mb-4">
                    <input
                      type="address1"
                      name="address1"
                      onChange={handleChange}
                      placeholder="Enter Address1"
                      value={values.address1}
                      className="u-full-width"
                    ></input>
                    {errors.address1 && touched.address1 ? (
                      <div className="error-label">{errors.address1}</div>
                    ) : null}
                  </div>
                </div>
                <div>Address2</div>
                <div className="form-group">
                  <div className="twelve columns mt-2 mb-4">
                    <input
                      type="address2"
                      name="address2"
                      onChange={handleChange}
                      placeholder="Enter Address2"
                      value={values.address2}
                      className="u-full-width"
                    ></input>
                    {errors.address2 && touched.address2 ? (
                      <div className="error-label">{errors.address2}</div>
                    ) : null}
                  </div>
                </div>
                <div>Phone Number*</div>
                <div className="form-group">
                  <div className="twelve columns mt-2 mb-4">
                    <input
                      type="phone"
                      name="phone"
                      onChange={handleChange}
                      placeholder="Enter Phone Number"
                      value={values.phone}
                      className="u-full-width"
                    ></input>
                    {errors.phone && touched.phone ? (
                      <div className="error-label">{errors.phone}</div>
                    ) : null}
                  </div>
                </div>
                <div>City*</div>
                <div className="form-group">
                  <div className="twelve columns mt-2 mb-4">
                    <input
                      type="city"
                      name="city"
                      onChange={handleChange}
                      placeholder="Enter City"
                      value={values.city}
                      className="u-full-width"
                    ></input>
                    {errors.city && touched.city ? (
                      <div className="error-label">{errors.city}</div>
                    ) : null}
                  </div>
                </div>
                <div>State*</div>
                <div className="form-group">
                  <div className="twelve columns mt-2 mb-4">
                    <input
                      type="state"
                      name="state"
                      onChange={handleChange}
                      placeholder="Enter State"
                      value={values.state}
                      className="u-full-width"
                    ></input>
                    {errors.state && touched.state ? (
                      <div className="error-label">{errors.state}</div>
                    ) : null}
                  </div>
                </div>
                <div>Country*</div>
                <div className="form-group">
                  <div className="twelve columns mt-2 mb-4">
                    <input
                      type="country"
                      name="country"
                      onChange={handleChange}
                      placeholder="Enter Country"
                      value={values.country}
                      className="u-full-width"
                    ></input>
                    {errors.country && touched.country ? (
                      <div className="error-label">{errors.country}</div>
                    ) : null}
                  </div>
                </div>
                <div>Zipcode*</div>
                <div className="form-group">
                  <div className="twelve columns mt-2 mb-4">
                    <input
                      type="zipcode"
                      name="zipcode"
                      onChange={handleChange}
                      placeholder="Enter Zipcode"
                      value={values.zipcode}
                      className="u-full-width"
                    ></input>
                    {errors.zipcode && touched.zipcode ? (
                      <div className="error-label">{errors.zipcode}</div>
                    ) : null}
                  </div>
                </div>
                <div>Role</div>
                <div className="form-group">
                  <div className="twelve columns mt-2 mb-4">
                    <input
                      type="role"
                      name="role"
                      onChange={handleChange}
                      placeholder="Enter Role"
                      value={values.role}
                      className="u-full-width"
                    ></input>
                    {errors.role && touched.role ? (
                      <div className="error-label">{errors.role}</div>
                    ) : null}
                  </div>
                </div>
                <div>About Yourself</div>
                <div className="form-group">
                  <div className="twelve columns mt-2 mb-4">
                    <input
                      type="about"
                      name="about"
                      onChange={handleChange}
                      placeholder="Type Something About Yourself"
                      value={values.about}
                      className="u-full-width"
                    ></input>
                    {errors.about && touched.about ? (
                      <div className="error-label">{errors.about}</div>
                    ) : null}
                  </div>
                </div>
                <button type="submit">Update</button>
              </form>
            );
          }}
        </Formik>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(UserUpdate);
