import { NavLink } from "react-router-dom"
import "./Menu.css"

const Menu = () =>{
    return(
        <nav className="main-menu">
            <ul>
                <NavLink to={'/'}><li>Basic Info</li></NavLink>
                <NavLink to={'/about'}><li>About me</li></NavLink>
                <NavLink to={'/contact'}><li>Contact</li></NavLink>
            </ul>
        </nav>
    )
}

export default Menu