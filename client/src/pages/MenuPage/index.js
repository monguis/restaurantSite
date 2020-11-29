import React, { useState, useEffect } from "react";
import menu from "./menuToRender";
import "./MenuPage.css"

const MenuPage = () => {

    const [menuIndex, setMenuIndex] = useState(0);
    const [mobileMenuState, setMobileMenuState] = useState(false)

    const handleMenuButtonClick = () => {
        setMobileMenuState(mobileMenuState => !mobileMenuState)
    }

    const handleSidebarButtonClick = (newIndex) => {
        setMobileMenuState(false)
        setMenuIndex(newIndex)
        document.getElementById(`${menu[newIndex].title}tag`).scrollIntoView({behavior:"smooth"});
    }




    return (

        <div id="menuContainer">
            <div id="mobileMenuButton" onClick={handleMenuButtonClick}>boton</div>
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
                                <h4 className="menuItemTitle">NAME</h4>
                                <p>Hopeful vaccine news and a big lifeline for
                                the second-biggest theatre chain operator sent
                                a jolt through other cinema stocks on Monday
                                .Hopeful vaccine news and a big lifeline for
                                the second-biggest theatre chain operator sent
                                a jolt through other cinema stocks on Monday.
                                <span className="menuItemPrice"> 12.99</span></p>
                            </div>
                        )}
                    </div>
                </div>
                )}

            </div>

        </div>
    )

}

export default MenuPage;