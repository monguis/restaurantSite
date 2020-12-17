import styles from "../../styles/Footer.module.css"
import BlurImageComponent from "../BlurImageComponent"
import ContainerComponent from "../ContainerComponent"

const Footer = () =>
    <footer className={styles.footerMainElement}>
        <ContainerComponent>
            <div className={styles.infoContainer}>
                <div>
                    <p>Las Sombrillas Mexican Restaurant</p>
                    <p>1510 s Galena Way</p>
                    <p>7209710087</p>
                </div>
                <img src="https://eatouteatwell.com/wp-content/uploads/2014/01/restaurant-front.jpg"/>
            </div>
        </ContainerComponent>
    </footer>

export default Footer;