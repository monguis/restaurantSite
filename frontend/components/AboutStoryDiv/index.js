import styles from "../../styles/AboutStoryDiv.module.css"

const AboutStoryDiv = () =>
<div>
<h1>
    Our Story
</h1>
<div className={styles.storyWrapper}>
    <div className={styles.storyPictureWrapper}>
            picture to Inject
    </div>
    <div className={styles.storyParagraphWrapper}>
            <p>
                paragraph to inject
            </p>
    </div>
    
</div>

<div className={styles.mapWrapper}>
    location map?
        
    </div>
</div>

export default AboutStoryDiv;