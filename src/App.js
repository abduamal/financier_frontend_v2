import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Homepage from "./components/Homepage";
import Dashboard from "./components/Dashboard";
import withAuth from "./components/auth/withAuth"

function App() {
  return(
    <div>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/dashboard" component={withAuth(Dashboard)} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
