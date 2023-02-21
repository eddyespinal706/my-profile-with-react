import { NavLink } from "react-router-dom"

const Menu = () =>{
    return(
        <nav className="main-menu">
            <ul>
                <li><NavLink to={'/'}>Basic Info</NavLink></li>
                <li><NavLink to={'/about'}>About me</NavLink></li>
                <li><NavLink to={'/contact'}>Contact Info</NavLink></li>
            </ul>
        </nav>
    )
}

export default Menu