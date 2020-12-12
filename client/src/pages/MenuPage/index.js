import React, { useEffect, useState } from "react";
import menu from "./menuToRender";
import "./MenuPage.css"

const MenuPage = () => {

    const [mobileMenuState, setMobileMenuState] = useState(false)

    const handleMenuButtonClick = () => {
        setMobileMenuState(mobileMenuState => !mobileMenuState)
    }

    const handleSidebarButtonClick = (newIndex) => {
        setMobileMenuState(false)
        document.getElementById(`${menu[newIndex].title}tag`).scrollIntoView({ behavior: "smooth" });
    }




    return (<>
        <div id="mobileMenuButtonWrapper">
            <button className="mobileMenuButton" onClick={handleMenuButtonClick}>
                <span style={{ opacity: mobileMenuState ? 1 : 0, position: "absolute", transition: "1s all ease" }}> <i class="fas fa-chevron-left"></i></span> Menu
            </button>
        </div>

        <div id="menuContainer">
            <div id='sectionSidebarWrapper' className={`${mobileMenuState ? "active" : ""}`}>
                <div id="sectionSidebar">
                    <h1 style={{ textAlign: "center" }}>Menu</h1>
                    <ul id="sidebarElementList">
                        {menu.map((section, arrayIndex) => <li className="sidebarElement" onClick={() => { handleSidebarButtonClick(arrayIndex) }}>
                            {section.title}
                        </li>)}
                    </ul>
                </div>
            </div>


            <div id="sectionMenuDisplay">
                {menu.map(menuSection => <div>
                    <h2 className='sectionTitle' key={`${menuSection.title}key`} id={`${menuSection.title}tag`} >{menuSection.title}</h2>
                    <div className="sectionMenuGrid">

                        {menuSection.sectionItems.map((item, index) =>
                            <div key={`${menuSection.title}item-${index}`} className="sectionMenuGridElement">
                                <h4 className="menuItemTitle">{item.name}</h4>
                                {item.description ? <p>{item.description}</p> : ""}
                                <span className="menuItemPrice"> ${item.price}</span>
                            </div>
                        )}
                    </div>
                </div>
                )}
            </div>
        </div>
    </>
    )

}

export default MenuPage;