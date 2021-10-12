import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { fetchTransactions } from '../actions/fetchTransactions'
import Transaction from '../components/Transaction.js'
import Transactions from '../components/Transactions.js'

class TransactionsContainer extends React.Component {

  componentDidMount() {
    // to connect fetchTransactions to redux store, use props
    this.props.fetchTransactions()
  }
  render(){
    return(
      <div>
        <Switch>
          {/* <Route path='/transactions/new' component={TransactionInput}/> */}
          <Route path='/transactions/:id'render={(routerProps) => <Transaction {...routerProps} transactions={this.props.transactions}/>}/>
          <Route path='/transactions' render={(routerProps) => <Transactions {...routerProps} transactions={this.props.transactions}/>}/>
        </Switch>

      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    transactions: state.transactions
  }
}
export default connect(mapStateToProps, {fetchTransactions})(TransactionsContainer)
