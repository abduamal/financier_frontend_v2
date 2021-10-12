import React from 'react'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'

function Accounts(props){
  console.log(props.accounts)
  const usersAccounts = props.accounts
  return(
    <div className="d-grid gap-2">
      {props.accounts && usersAccounts.map((account) =>
        <Accordion>
          <Accordion.Item eventKey="0" key={account.id}>
            <Accordion.Header>{account.attributes.name}: ${account.attributes.balance}</Accordion.Header>
            <Accordion.Body>
              <CardGroup>
                {account.attributes.account_transactions.map((transaction) =>
                  <Card>
                    <Card.Body>
                      <Card.Title>{transaction.description}</Card.Title>
                      <Card.Text>
                        {transaction.transaction_type}
                        <br/>
                        ${transaction.amount}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                  </Card>
                )}
              </CardGroup>
              <br/>
              <Button href={`/accounts/${account.id}`} key={account.id} variant="outline-primary" size="sm">
                View Account
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}
    </div>
  )
}
export default Accounts
