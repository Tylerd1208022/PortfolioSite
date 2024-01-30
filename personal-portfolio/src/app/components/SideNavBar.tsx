import React, { useState } from "react";
import styles from './SideNavBar.module.css';
import { useScoreState } from "../context";
interface SideNavBarProps {
    setPageState: React.Dispatch<React.SetStateAction<string>>;
    pageState: string;
}


const SideNavBar: React.FC<SideNavBarProps> = ({setPageState , pageState}) => {
   
    const {score, setScore} = useScoreState();

    const [showNavbar, setShowNavbar] = useState<boolean>(true);

    const updatePageState = (newPageState: string) => {
        setPageState(newPageState);
    };
    if (!showNavbar) {
        return (
            <div className = "showButton">
                <button className= {styles.chevronButton}
                onClick={() => setShowNavbar(true)}>
                    <div className={styles.chevronRight}/>
                </button>
            </div>
        );
    }
    return (
        <div className = {styles.navBar}>
            <div className = {styles.NameTitle}>
                Tyler Dempski
            </div>
            <div className = {styles.NameSubtitle}>
                Engineer of all things computers
            </div>
            <div className={styles.line}/>
            <div className={styles.space}/>
            <div className={styles.sideButtonFormat}>
                <button className={pageState==='About Me' ? styles.selectedButton : styles.unselectedButton}
                onClick={() => updatePageState('About Me')}>
                    About Me
                </button>
            </div>
            <div className={styles.sideButtonFormat}>
                <button className={pageState==='HLP' ? styles.selectedButton : styles.unselectedButton}
                onClick={() => updatePageState('HLP')}>
                    High Level Programming
                </button>
            </div>
            <div className={styles.sideButtonFormat}>
                <button className={pageState==='LLP' ? styles.selectedButton : styles.unselectedButton}
                onClick={() => updatePageState('LLP')}>
                    Low Level Programming
                </button>
            </div>
            <div className={styles.sideButtonFormat}>
                <button className={pageState==='HWE' ? styles.selectedButton : styles.unselectedButton}
                onClick={() => updatePageState('HWE')}>
                    Hardware Engineering
                </button>
            </div>
            <div className={styles.sideButtonFormat}>
                <button className={pageState==='Academic' ? styles.selectedButton : styles.unselectedButton}
                onClick={() => updatePageState('Academic')}>
                    Academic Experience
                </button>
            </div>
            <div className={styles.sideButtonFormat}>
                <button className={pageState==='Professional' ? styles.selectedButton : styles.unselectedButton}
                onClick={() => updatePageState('Professional')}>
                    Work Experience
                </button>
            </div>
            <div className={styles.sideButtonFormat}>
                <button className={pageState==='Quiz' ? styles.selectedButton : styles.unselectedButton}
                onClick={() => updatePageState('Quiz')}>
                    <div className={styles.BYOCButton}>Build Your Own Computer</div>
                    <div className={styles.BYOCScore}>{score}/11 Modules Completed</div>
                </button>
            </div>
            <div className={styles.sideChevronFormat}>
                <button className={styles.chevronButtonStuck}
                onClick={() => setShowNavbar(false)}>
                    <div className={styles.chevronLeft}/>
                </button>
            </div>
        </div>//End Navbar
    )
};

export default SideNavBar;