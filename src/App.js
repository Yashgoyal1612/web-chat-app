import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
// import { Route, Switch } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
    <Switch>
      <Route exact path='/' component = {Login}  />
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
    </Switch>
    </>
   );
}

export default App;
