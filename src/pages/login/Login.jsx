// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./login.scss"
  
const Login = () => {

  return (
    <div className="login">
        <div className="card">
            <div className="left">
                <h1>Chatify</h1>
                <p>Lorem ipsum dolor sit amet, adipisicing elit. Quod et accusantium amet tempore, saepe error sapiente laboriosam placeat recusandae similique ut modi deserunt consequuntur, quae obcaecati itaque asperiores voluptatem natus architecto id debitis cum!</p>
                <span>Don't you have an account?</span>
                <Link to ="/register">
                <button>Register</button>
                </Link>
            </div>
            <div className="right">
                <h1>Login</h1>
                <form >
                    <input type="text" placeholder="Username" />
                    {/* <p>{ formErrors.username}</p> */}
                    <input type="password" placeholder="Password" />
                    {/* <p>{ formErrors.password}</p> */}
                    <button>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login;
 
