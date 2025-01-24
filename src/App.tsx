
import './App.css'
import {A} from "./components/A.tsx";
import {B} from "./components/B.tsx";
import {ThemeContext} from "./context/ThemeContext.tsx";
import {useState} from "react";

function App() {
    // поточне занчення, оновлення стану = (початкове значення стану)
    const [themeColor, setThemeColor] = useState('light');

  return (
    <div>
      <ThemeContext.Provider value={{
          theme:themeColor,
          changeTheme: (themeValue:string) =>{setThemeColor(themeValue)}
      }}>
        <A/>
        <B/>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
