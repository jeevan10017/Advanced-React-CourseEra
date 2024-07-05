import "./styles.css";
import { useTheme } from '../ThemeContext';

const Switch = () => {
const { theme, toggleTheme } = useTheme();
return(
  <label className="switch">
    <input
    type="checkbox"
    checked={theme === "light"}
    onChange={toggleTheme}>
    </input>
    <span className="slider round"></span>
  </label>
)

};

export default Switch;