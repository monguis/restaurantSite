import React, { useState } from "react";
import menu from "./menuToRender";
import styles from "../styles/MenuPage.module.css"
import Layout from "../components/Layout";

const MenuPage = () => {

    const [mobileMenuState, setMobileMenuState] = useState(false)

    const handleMenuButtonClick = () => {
        setMobileMenuState(mobileMenuState => !mobileMenuState)
    }

    const handleSidebarButtonClick = (newIndex) => {
        setMobileMenuState(false)
        document.getElementById(`${menu[newIndex].title}tag`).scrollIntoView({ behavior: "smooth" });
    }




    return <Layout>
        <div id={styles.mobileMenuButtonWrapper}>
            <button className={styles.mobileMenuButton} onClick={handleMenuButtonClick}>
                <span>
                    <i class="fas fa-chevron-left"></i>
                </span>
                     Menu
                     <style jsx>
                    {`.mobileMenuButton span{
                        opacity:1; 
                        position: absolute; transition: 1s all ease;
                    }
                         `}
                </style>
            </button>
        </div>

        <div id={styles.menuContainer}>
            <div id={styles.sectionSidebarWrapper}
                className={mobileMenuState ? styles.active : ""}>
                <div id={styles.sectionSidebar}>
                    <h1>
                        Menu
                        </h1>
                    <ul id={styles.sidebarElementList}>
                        {menu.map((section, arrayIndex) =>
                            <li className={styles.sidebarElement}
                                onClick={() => { handleSidebarButtonClick(arrayIndex) }}>
                                {section.title}
                            </li>)}
                    </ul>
                </div>
            </div>


            <div id={styles.sectionMenuDisplay}>
                {menu.map(menuSection => <div>
                    <h2 className={styles.sectionTitle}
                        key={`${menuSection.title}key`}
                        id={`${menuSection.title}tag`} >
                        {menuSection.title}
                    </h2>

                    <div className={styles.sectionMenuGrid}>

                        {menuSection.sectionItems.map((item, index) =>
                            <div key={`${menuSection.title}item-${index}`}
                                className={styles.sectionMenuGridElement}>
                                <h4 className={styles.menuItemTitle}>
                                    {item.name}
                                </h4>
                                {item.description ? <p>{item.description}</p> : ""}
                                <span className={styles.menuItemPrice}>
                                    ${item.price}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
                )}
            </div>
        </div>

    </Layout>

}

export default MenuPage;