import React from "react"
import { Link } from "react-router-dom"

export default function NavLateral({ user }) {

    return (<div className="nav-lateral">
        <div className="nav-lateral-content">
            <Link to="/home" ><i class="fas fa-dove fa-3x"></i></Link>
            <ul>
                <Link to="/home" style={{ textDecoration: 'none' }}><li className="nav-lateral-elem">Inicio</li></Link>
                <Link to={`/${user.userName}`} style={{ textDecoration: 'none' }}><li className="nav-lateral-elem">Perfil</li></Link>
                <Link to={`/${user.userName}/settings`} style={{ textDecoration: 'none' }}><li className="nav-lateral-elem">Settings</li></Link>
            </ul>
        </div >
    </div >)
}