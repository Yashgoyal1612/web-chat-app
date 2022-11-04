import { Link } from "react-router-dom";
import "./register.scss"

const Register = () => {
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Chatify</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod et accusantium amet tempore, saepe error sapiente laboriosam placeat recusandae similique ut modi deserunt consequuntur, quae obcaecati itaque asperiores voluptatem natus architecto id debitis cum!</p>
                    <span>Do have an account ?</span>
                    <Link to="/login">
                    <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="Password" />
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;
