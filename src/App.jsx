import React, { useState } from "react";
import "./App.css";
import Heading from "./components/atoms/heading";
import Text from "./components/atoms/text";

function App() {
    const userPrefersTheme = (theme) =>
        window.matchMedia &&
        window.matchMedia(`(prefers-color-scheme: ${theme})`).matches;

    const changeToTheme = (theme) => {
        const htmlElement = document.querySelector("html");
        const reversedTheme = theme === "dark" ? "light" : "dark";

        htmlElement.classList.add(`${theme}-theme`);
        htmlElement.classList.remove(`${reversedTheme}-theme`);
    };

    const verifyThemeClass = (theme) => {
        const htmlElement = document.querySelector("html");

        return htmlElement.classList.contains(`${theme}-theme`);
    };

    const toggleTheme = () => {
        if (verifyThemeClass("dark")) return changeToTheme("light");

        if (verifyThemeClass("light")) return changeToTheme("dark");

        if (userPrefersTheme("dark")) return changeToTheme("light");

        if (userPrefersTheme("light")) return changeToTheme("dark");
    };

    return (
        <div className="App">
            <Heading element="h1">Heading H1</Heading>
            <Heading element="h2">Heading H2</Heading>
            <Heading element="h3">Heading H3</Heading>
            <Heading element="h4">Heading H4</Heading>
            <Heading element="h5">Heading H5</Heading>
            <Heading element="h6">Heading H6</Heading>
            <Text weight="bold" size="xl">
                Text XL
            </Text>
            <Text weight="bold" size="lg">
                Text LG
            </Text>
            <Text weight="bold" size="base">
                Text BS
            </Text>
            <Text weight="bold" size="sm">
                Text SM
            </Text>
            <Text weight="bold" size="xs">
                Text XS
            </Text>

            <button onClick={toggleTheme}>Change theme</button>
        </div>
    );
}

export default App;
