import React, { useState } from "react";
import { Button } from "./NavBarButton/"
import styles from "../../styles/NavBar.module.css"
import Link from "next/link"
import { linkObjectsArray } from './linkObjects';

const NavBar = () => {

    const [mobileMenuButtonState, setMobileMenuButton] = useState(false);

    const handleMenuButtonCLick = () => {
        setMobileMenuButton(mobileMenuButtonState => !mobileMenuButtonState);
    }

    return (
        <nav className={styles.NavBarElements}>
            <div className={styles.companyLogo}>company logo</div>
            <div className={styles.MobileMenuButton} onClick={handleMenuButtonCLick}>
                {mobileMenuButtonState ? <i className="fas fa-chevron-left"></i> : <i className="fas fa-bars"></i>}
            </div>

            <ul className={mobileMenuButtonState ? `${styles.navBarLinkList} ${styles.active}` : `${styles.navBarLinkList}`}>
                {linkObjectsArray.map(item => {
                    return (
                        <Link href={item.href} >
                            <li className={styles.navBarLink} onClick={handleMenuButtonCLick}>
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