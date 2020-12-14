import styles from "../../../styles/Hotlink.module.css"
import BlurImageContainer from "../../BlurImageComponent/"

const Hotlink = ({ description, thumbnail }) =>
    <div className={styles.hotlinkWrapperDiv}>
        <h2 className={styles.hotlinkDescription}>
            {description}
        </h2>
        <div className={styles.hotlinkImageContainer}>
            <BlurImageContainer
                tinySrc={thumbnail.formats.small.url}
                largeSrc={thumbnail.url}
            />
        </div>
    </div>

export default Hotlink;