import React, { Component } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { connect } from "react-redux";
import { signupUser } from "../../store/actions/user_actions";

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Required Field"),
  password: Yup.string()
    .min(6, "Password is too short!")
    .required("Required Field"),
  firstname: Yup.string()
    .required("Required Field"),
  lastname: Yup.string()
    .required("Required Field"),
  address1: Yup.string()
    .required("Required Field"),
  address2: Yup.string(),
  city: Yup.string()
    .required("Required Field"),
  state: Yup.string()
    .required("Required Field"),
  country: Yup.string()
    .required("Required Field"),
  zipcode: Yup.number()
    .required("Required Field"),
  role: Yup.string()
});

class UserSignup extends Component {
  state = {
    success: false,
  };

  componentDidUpdate() {
    if (this.state.success) {
      this.props.history.push("/log-in");
    }
  }

  render() {
    return (
      <div style={{ marginTop: "20px" }} className="container form_container">
        <h1>Welcome Join Us!</h1>
        <hr></hr>
        <h4>Sign-up</h4>
        <Formik
          initialValues={{
            email: "example@gmail.com",
            password: "myPassword123",
            firstname: "jack",
            lastname: "black",
            address1: "225 Terry Ave N",
            address2: "",
            city: "Seattle",
            state: "WA",
            country: "US",
            zipcode: 98109,
            role: 0
          }}
          validationSchema={SignUpSchema}
          onSubmit={(values) => {
            console.log(values);
            this.props.dispatch(signupUser(values)).then((response) => {
              if (this.props.user.success) {
                this.setState({
                    success: true,
                });
              }
            });
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
                <div>Email*</div>
                <div className="form-group">
                  <div className="twelve columns mt-2 mb-4">
                    <input
                      type="email"
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Enter Email"
                      value={values.email}
                      className="u-full-width"
                    ></input>
                    {errors.email && touched.email ? (
                      <div className="error-label">{errors.email}</div>
                    ) : null}
                  </div>
                </div>
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
                <button type="submit">Sign Up</button>
                <br />
                {this.state.success ? (
                  <div className="error_label">Error, Please try again.</div>
                ) : null}
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

export default connect(mapStateToProps)(UserSignup);
