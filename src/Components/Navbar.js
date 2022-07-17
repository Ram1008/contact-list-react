import React,{ useContext} from 'react'
import UserContext from '../Context/UserContext'
import {useNavigate} from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate();
    const context = useContext(UserContext);
    const {logoutHandler,login} = context;
    const handleLogOut = () =>{
        logoutHandler();
        navigate('/login')
    }
    return (
        <nav className="d-flex flex-row-reverse navbar navbar-expand-lg navbar-light bg-light">
            { login === true?<div className="d-flex flex-row-reverse mx-3" id="navbarSupportedContent">  
                <button className="btn btn-outline-success btn-sm my-2 my-sm-0" type="submit" onClick={handleLogOut}>Log out</button> 
            </div>: null}
        </nav>
    )
}

export default Navbar;