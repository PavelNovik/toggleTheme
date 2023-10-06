import React, { useState } from 'react';
import { ThemeProvider } from "styled-components";
import './App.css';
import Header from "./Header";
import { themes } from "./themes";
import Switch from "./ThemeChanger";

export type ThemeType = "normal" | "crazy"

function App() {
    const [theme, setTheme] = useState(themes.normal)

    const handleThemeChange = (themeName: string) => {
        if (themeName === "normal" || themeName === "crazy") {

            setTheme(themes[themeName])
        }
    };

    const themeNames = Object.keys(themes)

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <div>
                    <Header logo={theme.logo} />
                    <Switch changeTheme={handleThemeChange} themes={themeNames}
                    />
                </div>
            </ThemeProvider>

        </div>
    );
}

export default App;
