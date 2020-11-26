import React, { useState } from "react";
import "./NavBarDesignStyle.css";
import { useViewportContext } from "../ViewportContext/"


const NavBar = () => {

    const [mobileMenuButtonState, setMobileMenuButton] = useState(false);

    const handleMenuButtonCLick = () => {
        setMobileMenuButton(mobileMenuButtonState=> !mobileMenuButtonState);
    }

    const { width, height } = useViewportContext()

    return (
        <nav className="NavBarElements">
            <div className="companyLogo">company logo</div>
            <div className="MobileMenuButton" onClick={handleMenuButtonCLick}>
                {mobileMenuButtonState ? <i class="fas fa-chevron-left"></i> : <i class="fas fa-bars"></i>}
            </div>

            <ul className={mobileMenuButtonState ? 'navBarLinkList active' : 'navBarLinkList'}>
                {["Home", "Order now", "Menu", "Contact us", "About"].map(item => {
                    return (<li className="navBarLink">
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