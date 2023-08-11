import {useState} from "react";
import { register } from "../services/auth-service";
import {useNavigate} from "react-router";

function RegisterScreen() {
    const [user, setUser] = useState({
        username:"",
        password:""
    })
    const navigate = useNavigate();
    const handleRegister = async (e) => {
        e.preventDefault();
        const newUser = await register(user);
        navigate("/tuiter/user/profile");
};
    return (
        <div>
            <h1>Register</h1>
            <form>
                <div>
                    <label>Username</label>
                    <input className="form-control" value={user.username} type="text" name="username" placeholder="Username"
                           onChange={(e) => setUser({...user, username: e.target.value})}/>
                </div>
                <div>
                    <label>Password</label>
                    <input className="form-control" value={user.password} type="password" name="password" placeholder="Password"
                           onChange={(e) => setUser({...user, password: e.target.value})}/>
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input className="form-control" type="password" name="password2" placeholder="Confirm Password" />
                </div>
                <input className="btn btn-primary" onClick={handleRegister} value="Register"/>
            </form>
        </div>
    );
}
export default RegisterScreen;