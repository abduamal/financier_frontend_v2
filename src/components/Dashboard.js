import React from "react";
import { connect } from "react-redux";
import Alert from 'react-bootstrap/Alert'

class Dashboard extends React.Component {
  render() {
    return (
      <Alert variant="success">
        <Alert.Heading>Hey, user. Welcome to your dashboard</Alert.Heading>
        <p>
          This is a protected route. It should only be visible to a user who is signed in.
        </p>
      </Alert>
    );
  }
}

export default connect()(Dashboard);
