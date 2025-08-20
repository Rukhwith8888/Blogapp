import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";


export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav>
        <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/blog" >Blog</NavLink>
      <NavLink to="/about" >About</NavLink>
      </div>
      <button onClick={toggleTheme}>
        <span className="material-symbols-outlined">{theme === "light" ? "dark_mode" : "light_mode"}
        
        </span>
 
      </button>
    </nav>
  );
}

    

