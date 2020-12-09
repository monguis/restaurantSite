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
                <span style={mobileMenuState ? { opacity: 1, display: "inline" } : { opacity: 0, display: "none" }}> <i class="fas fa-chevron-left"></i></span> Menu
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
    </>
    )

}

export default MenuPage;