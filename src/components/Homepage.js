import React from "react";
import Alert from 'react-bootstrap/Alert'

export default function Homepage() {
  return (
    <Alert variant="success">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        This is a normal route. It should be accessible to anyone, whether they're logged in or not.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things nice
        and tidy.
      </p>
    </Alert>
  )
}
