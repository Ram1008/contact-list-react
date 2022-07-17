import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'
import { useNavigate } from 'react-router-dom'
const Login = () => {

    const context = useContext(UserContext);
    const navigate = useNavigate();
    const { loginHandler } = context;
    const [credential, setCridential] = useState({ userName: "", password: "" })
    const changeHandler = (e) => {
        setCridential({ ...credential, [e.target.name]: e.target.value });
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (credential.userName === "foo" && credential.password === "bar") {
            loginHandler();
            setCridential({ userName: "", password: "" })
            navigate('/')
        }

    }

    return (
        <div className="d-flex justify-content-around my-5 ">
            <form onSubmit={submitHandler} className="d-flex flex-column justify-content-around shadow p-4 mb-5 bg-white rounded">
                <div className="form-group my-2">
                    <label>User Name</label>
                    <input type="text" name="userName" onChange={changeHandler} value={credential.userName} className="form-control" placeholder="User Name" />
                </div>
                <div className="form-group my-2">
                    <label>Password</label>
                    <input type="password" name="password" onChange={changeHandler} value={credential.password} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary my-2 mx-auto ">Submit</button>
            </form>
        </div>
    )
}

export default Login;