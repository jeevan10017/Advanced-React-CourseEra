import { createContext , useContext ,useState} from 'react';

const ThemeContext = createContext('light');

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider 
        value={{
          theme,
           toggleTheme: () => setTheme(theme === 'light' ? 'dark' : 'light')
           }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);   // instead of using useContext(ThemeContext) in every component we can use this custom hook useTheme
