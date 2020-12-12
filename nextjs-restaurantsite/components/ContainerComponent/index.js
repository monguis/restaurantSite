import React from "react"
import styles from "../../styles/ContainerComponent.module.css"

const ContainerComponent = ({ children }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default ContainerComponent;