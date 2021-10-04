import React from "react";
import { connect } from "react-redux";
import { signupUser } from "../../actions/auth";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Signup extends React.Component {
  state = {
    first_name: "",
    middle_initial: "",
    last_name: "",
    email: "",
    password: "",
    errors: {status: {message: ""}}
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { first_name, middle_initial, last_name, email, password } = this.state;
    this.props
      .dispatchSignupUser({ first_name, middle_initial, last_name, email, password })
      .then(() => this.props.history.push("/"))
      .catch((errors) => this.setState({ errors }));
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control value={this.state.first_name} onChange={this.handleChange} id="first_name" name="first_name" type="text" placeholder="First Name"/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridMiddleInitial">
            <Form.Label>Middle Initial</Form.Label>
            <Form.Control value={this.state.middle_initial} onChange={this.handleChange} id="middle_initial" name="middle_initial" type="text" placeholder="MI"/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control value={this.state.last_name} onChange={this.handleChange} id="last_name" name="last_name" type="text" placeholder="Last Name" />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control value={this.state.email} onChange={this.handleChange} id="email" name="email" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Text className="text-muted">
          {this.state.errors.status.message}
        </Form.Text>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSignupUser: (credentials) => dispatch(signupUser(credentials))
  };
};

export default connect(null, mapDispatchToProps)(Signup);
