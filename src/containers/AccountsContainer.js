import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { fetchAccounts } from '../actions/fetchAccounts'
import Accounts from '../components/Accounts.js'
import Account from '../components/Account.js'
class AccountsContainer extends React.Component {

  componentDidMount() {
    // to connect fetchAccounts to redux store, use props
    this.props.fetchAccounts()
  }
  render(){
    return(
      <div>
        <Switch>
          {/* <Route path='/accounts/new' component={AccountInput}/> */}
          <Route path='/accounts/:id'render={(routerProps) => <Account {...routerProps} accounts={this.props.accounts}/>}/>
          <Route path='/accounts' render={(routerProps) => <Accounts {...routerProps} accounts={this.props.accounts}/>}/>
        </Switch>

      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    accounts: state.accounts.accounts.data
  }
}
export default connect(mapStateToProps, {fetchAccounts})(AccountsContainer)
