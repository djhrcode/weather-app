import React from "react";
import classNames from "classnames";
import styles from "./style.module.css";

export default function Text({ size = "base", weight = "regular", children }) {
    return (
        <p
            className={classNames(
                styles.text,
                styles[`text--${size}`],
                styles[`text--${weight}`]
            )}
        >
            {children}
        </p>
    );
}
