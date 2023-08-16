// import {useState} from "react";
// import { register } from "../services/auth-service";
// import {useNavigate} from "react-router";
// import {loginThunk, registerThunk} from "../services/auth-thunks";
// import {useDispatch} from "react-redux";
//
// function RegisterScreen() {
//     const [user, setUser] = useState({
//         username:"",
//         password:""
//     })
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const handleRegister = async (e) => {
//         try {
//             console.log("register ", username, password);
//             await dispatch(registerThunk({ username, password }));
//             navigate("/tuiter/profile");
//         } catch (e) {
//             alert(e);
//         }
// };
//     return (
//         <div>
//             <h1>Register</h1>
//             <form>
//                 <div>
//                     <label>Username</label>
//                     <input className="form-control" value={username} type="text" name="username" placeholder="Username"
//                            onChange={(event) => setUsername(event.target.value)}/>
//                 </div>
//                 <div>
//                     <label>Password</label>
//                     <input className="form-control" value={password} type="password" name="password" placeholder="Password"
//                            onChange={(event) => setPassword(event.target.value)}/>
//                 </div>
//                 <div>
//                     <label>Confirm Password</label>
//                     <input className="form-control" type="password" name="password2" placeholder="Confirm Password" />
//                 </div>
//                 <input className="btn btn-primary" onClick={handleRegister} value="Register"/>
//             </form>
//         </div>
//     );
// }
// export default RegisterScreen;

import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { registerThunk } from "../services/auth-thunks";
function RegisterScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleRegister = async () => {
        try {
            dispatch(registerThunk({ username, password }))
                .then((resp) => {
                    if (resp.payload != null) return navigate("/tuiter/profile");
                })
                .catch(() => console.log("Unable to register"));
        } catch (e) {
            alert(e);
        }
    };
    return (
        <div>
            <h1>Register Screen</h1>
            <div className="mt-2">
                <label>Username</label>
                <input
                    className="form-control"
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <div className="mt-2">
                <label>Password</label>
                <input
                    className="form-control"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <button className="btn btn-primary mt-2" onClick={handleRegister}>
                Register
            </button>
        </div>
    );
}
export default RegisterScreen;