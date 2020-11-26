import React, { useState } from "react";
import "./NavBarDesignStyle.css";
import { useViewportContext } from "../../util/contexts/ViewportContext/index.js";
import { Button } from "./NavBarButton/"

const NavBar = () => {

    const [mobileMenuButtonState, setMobileMenuButton] = useState(false);

    const handleMenuButtonCLick = () => {
        setMobileMenuButton(mobileMenuButtonState => !mobileMenuButtonState);
    }

    // const { width, height } = useViewportContext()

    return (
        <nav className="NavBarElements">
            <div className="companyLogo">company logo</div>
            <div className="MobileMenuButton" onClick={handleMenuButtonCLick}>
                {mobileMenuButtonState ? <i class="fas fa-chevron-left"></i> : <i class="fas fa-bars"></i>}
            </div>

            <ul className={mobileMenuButtonState ? 'navBarLinkList active' : 'navBarLinkList'}>
                {["Home", "Menu", "Contact us", "Locations", "About"].map(item => {
                    return (
                        <li className="navBarLink">
                            {item}
                        </li>)
                })}
                <li>
                    <Button>
                        Order Now
                    </Button>
                </li>
            </ul>


        </nav >
    )
}

export default NavBar;