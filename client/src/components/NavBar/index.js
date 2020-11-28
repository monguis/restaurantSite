import React, { useState } from "react";
import "./NavBarDesignStyle.css";
import { useViewportContext } from "../../util/contexts/ViewportContext/index.js";
import { Button } from "./NavBarButton/"
import { Link } from 'react-router-dom';
import { linkObjectsArray } from './linkObjects';

const NavBar = () => {

    const [mobileMenuButtonState, setMobileMenuButton] = useState(false);

    const handleMenuButtonCLick = () => {
        setMobileMenuButton(mobileMenuButtonState => !mobileMenuButtonState);
    }

    return (
        <nav className="NavBarElements">
            <div className="companyLogo">company logo</div>
            <div className="MobileMenuButton" onClick={handleMenuButtonCLick}>
                {mobileMenuButtonState ? <i className="fas fa-chevron-left"></i> : <i className="fas fa-bars"></i>}
            </div>

            <ul className={mobileMenuButtonState ? 'navBarLinkList active' : 'navBarLinkList'}>
                {linkObjectsArray.map(item => {
                    return (
                        <Link to={item.href} >
                            <li className="navBarLink" onClick={handleMenuButtonCLick}>
                                {item.name}

                            </li>
                        </Link>)
                })}
                <li >
                    <Button >
                        Order Now
                    </Button>
                </li>
            </ul>


        </nav >
    )
}

export default NavBar;