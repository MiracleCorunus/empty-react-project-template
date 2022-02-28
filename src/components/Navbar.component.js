import React, {useContext} from 'react';
import ThemeContext from "../contexts/theme/ThemeContext";

const Navbar = ({name}) => {
    const themeContext = useContext(ThemeContext);
    const {darkMode, changeTheme} = themeContext;

    return (
        <nav className={`navbar navbar-${darkMode ? "light" : 'dark'}light bg-${darkMode ? "light" : 'dark'}`}>
            <span className="navbar-brand mb-0 h1">
                {name}
            </span>
            <button  className={`btn btn-${darkMode ? "dark" : 'light'}`} onClick={changeTheme}>
                Switch to {darkMode ? "dark" : "light"} mode
            </button>
        </nav>
    );
};

export default Navbar;