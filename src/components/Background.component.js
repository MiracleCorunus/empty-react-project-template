import React, {useContext} from 'react';
import ThemeContext from "../contexts/theme/ThemeContext";

const Background = ({children}) => {
    const themeContext = useContext(ThemeContext);
    const {darkMode} = themeContext;

    return (
       <div className={`bg-${darkMode ? "light" : "dark"} text-${darkMode ? "dark" : "light" } vh-100`}>
           {children}
       </div>
    );
};

export default Background;