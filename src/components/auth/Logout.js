import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/auth";
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button'

const Logout = ({ dispatchLogoutUser }) => {
  const history = useHistory();

  const handleClick = () => {
    dispatchLogoutUser().then(() => history.push("/"));
  };

  return (
    <Button onClick={handleClick} variant="outline-primary">Log Out</Button>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLogoutUser: () => dispatch(logoutUser())
  };
};

export default connect(null, mapDispatchToProps)(Logout);
