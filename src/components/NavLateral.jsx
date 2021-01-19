import React from "react"
import { Link } from "react-router-dom"
import userActions from "../redux/Actions/userActions";
import { useDispatch } from "react-redux";

export default function NavLateral({ user }) {

    const dispatch = useDispatch();
    return (<div className="nav-lateral">
        <div className="nav-lateral-content">
            <Link to="/home" ><i className="fas fa-dove fa-3x"></i></Link>
            <ul>
                <Link to="/home" style={{ textDecoration: 'none' }}><li className="nav-lateral-elem">Inicio</li></Link>
                <Link to={`/${user.userName}`} style={{ textDecoration: 'none' }}><li className="nav-lateral-elem">Perfil</li></Link>
                <Link to={`/${user.userName}/settings`} style={{ textDecoration: 'none' }}><li className="nav-lateral-elem">Settings</li></Link>
                <Link to={"/"} style={{ textDecoration: 'none' }} onClick={() => dispatch(userActions.loggedOut())}><li className="nav-lateral-elem">Logout</li></Link>
            </ul>
        </div >
    </div >)
}