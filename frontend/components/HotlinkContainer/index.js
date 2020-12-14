import styles from "../../styles/HotlinkContainer.module.css"
import Hotlink from "./Hotlink/";

const HotlinkContainer = ({ hotlinkResponse }) =>
    <div className={styles.hotlinkContainerDiv}>
        {hotlinkResponse.map(hotlinkElement => <Hotlink {...hotlinkElement}/>)}
    </div>


export default HotlinkContainer;