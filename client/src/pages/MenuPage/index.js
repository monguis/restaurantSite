import React, { useState, useEffect } from "react";
import menu from "./menuToRender";
import "./MenuPage.css"

const MenuPage = () => {

    const [menuIndex, setMenuIndex] = useState(0);
    const [mobileMenuState, setMobileMenuState] = useState(false)

    const handleMenuButtonClick = () => {
        console.log(mobileMenuState)
        setMobileMenuState(mobileMenuState => !mobileMenuState)
    }

    return (

        <div id="menuContainer">
            <div id="mobileMenuButton" onClick={handleMenuButtonClick}>boton</div>
            <div id='sectionSidebarWrapper' className={`${mobileMenuState? "active":""}`}>
                <div id="sectionSidebar">
                    <h1>Menu</h1>
                    <ul>
                        {menu.map((section, arrayIndex) => <li className="sidebarElement" onClick={() => { setMenuIndex(arrayIndex) }}>
                            {section.title}
                        </li>)}
                    </ul>
                </div>
            </div>

            <div id="sectionMenuDisplay">
                <h2 className='sectionTitle'>{menu[menuIndex].title}</h2>
                <div className="sectionMenuGrid">

                    {menu[menuIndex].sectionItems.map(item =>
                        <div className="sectionMenuGridElement">
                            <h4>NAME</h4>
                            <p>Hopeful vaccine news and a big lifeline for the second-biggest theatre chain operator sent a jolt through other cinema stocks on Monday.Hopeful vaccine news and a big lifeline for the second-biggest theatre chain operator sent a jolt through other cinema stocks on Monday.</p>
                            <h6>Price</h6>
                            <p>notes if any</p>
                        </div>)}

                </div>
            </div>
        </div>

    )
}

export default MenuPage;