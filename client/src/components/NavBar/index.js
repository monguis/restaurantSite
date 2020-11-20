import React, { useState } from "react";
import "./NavBarDesignStyle.css";
import { useViewportContext } from "../ViewportContext/"


const NavBar = () => {

    const [mobileMenuButtonState, setMobileMenuButton] = useState(false);

console.log(useViewportContext())

    const handleMenuButtonCLick = () => {
        setMobileMenuButton(!mobileMenuButtonState);
    }

    return (
        <nav className="NavBar">
            <div>{useViewportContext[0]}</div>
            <div className="MobileMenuButton" onClick={handleMenuButtonCLick}>
                {mobileMenuButtonState ? <i class="fas fa-chevron-left"></i> : <i class="fas fa-bars"></i>}
            </div>

            <ul className="navBarItemList">
                {["Home", "Order now", "Menu", "Contact us", "About"].map(item => {
                    return (<li className="navBarButton">
                        <div href="">
                            {item}
                        </div>
                    </li>)
                })}
            </ul>


        </nav >
    )
}

export default NavBar;