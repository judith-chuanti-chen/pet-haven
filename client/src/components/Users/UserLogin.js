import React, { Component } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { connect } from "react-redux";
import { loginUser } from "../../store/actions/user_actions";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Required Field"),
  password: Yup.string()
    .min(6, "Password is too short!")
    .required("Required Field"),
});

class UserLogin extends Component {
  state = {
    success: false,
    validation: false,
  };

  static getDerivedStateFromProps(props, state) {
    const auth = props.user.auth;
    if (auth) {
      return {
        success: auth ? true : false,
      };
    }
    return null;
  }

  componentDidUpdate() {
    if (this.state.success) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div style={{ marginTop: "20px" }} className="container form_container">
        <h1>Welcome Back</h1>
        <hr></hr>
        <h4>Sign-in</h4>
        <Formik
          initialValues={{
            email: "example@gmail.com",
            password: "myPassword123",
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            console.log(values);
            this.props.dispatch(loginUser(values)).then((response) => {
              if (!this.props.user.auth) {
                this.setState({
                  validation: true,
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
                <div className="form-group">
                  <div>Email*</div>
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
                <div className="form-group">
                  <div>Password*</div>
                  <div className="twelve columns  mt-2 mb-4">
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
                <button type="submit">Login</button>
                <br />
                {this.state.validation ? (
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

export default connect(mapStateToProps)(UserLogin);
