import React, { useState } from "react";
import styles from './SocialBar.module.css';

const SocialBar = () => {

    return (
        <div className={styles.socialBar}>
            <div className={styles.socialCell}>
                <a href="https://www.linkedin.com/in/tylerdempski/">
                <img src="LinkedIn_icon.png" alt="LinkedIn"/>
                </a>
                    Tyler Dempski
            </div>
            <div className={styles.socialCell}>
                <a href="https://www.instagram.com/tyler.dempski/">
                <img src="instagram.png" alt="Instagram"/>
                </a>
                    @tyler.dempski
            </div>
            <div className={styles.socialCell}>
                <a href="https://www.facebook.com/tyler.dempski/">
                <img src="Facebook_icon.svg.png" alt="Facebook"/>
                </a>
                Tyler Dempski
            </div>
            <div className={styles.socialCell}>
             <a href="https://mail.google.com/">
                <img src="gmail.png" alt="Gmail"/>
                </a>
                Tylerd120802
            </div>
        </div>
        
    );

}

export default SocialBar