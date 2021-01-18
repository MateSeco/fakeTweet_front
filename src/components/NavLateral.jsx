import React from "react"
import { Link } from "react-router-dom"

export default function NavLateral({ user }) {

    return (<div className="nav-lateral">
        <div className="nav-lateral-content">
            <i class="fas fa-dove fa-3x"></i>
            <ul>
                <Link to="/home" ><li className="nav-lateral-elem">Inicio</li></Link>
                <Link to={`/${user.userName}`}><li className="nav-lateral-elem">Perfil</li></Link>
                <Link to={`/${user.userName}/settings`}><li className="nav-lateral-elem">Settings</li></Link>
            </ul>
        </div >
    </div >)
}