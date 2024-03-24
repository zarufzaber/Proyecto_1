import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
    const [navScrollColor, setNavScrollColor] = useState(false);

    const onChangeNavColor = () => {
        if (window.scrollY >= 100) {
            setNavScrollColor(true);
        } else {
            setNavScrollColor(false);
        }
    };

    window.addEventListener("scroll", onChangeNavColor);

    return (
        <nav
            className={
                navScrollColor ? "navbar-scroll-color navbar-main" : "navbar-main"
            }
        >
            <ul>
                <li className="nav-item">
                    <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={100}
                    >
                        About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={100}
                    >
                        Service
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;
