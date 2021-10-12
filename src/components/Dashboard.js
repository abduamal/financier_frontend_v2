import React from "react";
import { connect } from "react-redux";
// import AccountsContainer from '../containers/AccountsContainer.js'
import Button from 'react-bootstrap/Button'
// import Alert from 'react-bootstrap/Alert'

class Dashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Button href="/accounts" variant="primary">Accounts</Button>
      </React.Fragment>
    );
  }
}

export default connect()(Dashboard);
