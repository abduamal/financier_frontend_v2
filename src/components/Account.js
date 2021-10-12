import React from 'react'
import Button from 'react-bootstrap/Button'

function Account(props) {
  console.log(props.accounts.accounts);
  const account = props.accounts.accounts[props.match.params.id - 1]
  return(
    <div>

    </div>
  )
}

export default Account
