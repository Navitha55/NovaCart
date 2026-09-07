import {

    Link,

    NavLink

} from "react-router-dom";

import {

    useContext

} from "react";

import {

    ThemeContext

} from "../../context/ThemeContext";

import {

    useAuth

} from "../../hooks/useAuth";

import {

    useCart

} from "../../hooks/useCart";

import styles from "./Navbar.module.css";


const Navbar = () => {


    const {

        theme,

        toggleTheme

    } = useContext(
        ThemeContext
    );


    const {

        user,

        logout

    } = useAuth();


    const {

        totalItems

    } = useCart();


    return (

        <nav
            className={styles.navbar}
        >

            <Link
                to="/"
                className={styles.logo}
            >

                NovaCart

            </Link>


            <div
                className={styles.links}
            >

                <Link to="/">
                    Home
                </Link>


                <NavLink to="/cart">

                    Cart
                    ({totalItems})

                </NavLink>


                <button
                    onClick={toggleTheme}
                >

                    {theme === "light"
                        ? "🌙"
                        : "☀️"}

                </button>


                {user ? (

                    <button
                        onClick={logout}
                    >

                        Logout

                    </button>

                ) : (

                    <NavLink to="/login">

                        Login

                    </NavLink>

                )}

            </div>

        </nav>

    );

};


export default Navbar;