import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/auth";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    error: false
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props
      .dispatchLoginUser({ email, password })
      .then(() => this.props.history.push("/"))
      .catch(() => this.setState({ error: true }));
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} >
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={this.handleChange} value={this.state.email} name="email" type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={this.handleChange} value={this.state.password} name="password" type="password" placeholder="Password" />
        </Form.Group>
        <Form.Text className="text-muted">
          {this.state.error && "Invalid email or password"}
        </Form.Text>
        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLoginUser: (credentials) => dispatch(loginUser(credentials))
  };
};

export default connect(null, mapDispatchToProps)(Login);
