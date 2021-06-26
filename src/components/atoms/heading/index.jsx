import React from "react";
import styles from "./style.module.css";
import classNames from "classnames";

export default function Heading({ element = "h3", weight = "bold", children }) {
    const HeadingElement = element;

    return (
        <HeadingElement
            className={classNames(
                styles["heading"],
                styles[`heading--${element}`],
                styles[`heading--${weight}`]
            )}
        >
            {children}
        </HeadingElement>
    );
}
