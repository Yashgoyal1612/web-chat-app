import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useState } from "react";


function App() {
  // const initialValues = {username: "",email: "", password: ""};
  // const [formValues, setFormValues]= useState(initialValues);
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