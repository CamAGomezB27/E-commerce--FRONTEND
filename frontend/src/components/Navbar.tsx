import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <nav>
            <h2> Tienda Online </h2>
            <ul>
                <li><Link to="/"> Inicio </Link></li>
                <li><Link to="/productos"> Productos </Link></li>
                <li><Link to="/contacto"> Contacto </Link></li>
            </ul>
        </nav>
    )
}

export default Navbar