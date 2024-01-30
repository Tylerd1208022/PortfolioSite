import React, { useState } from "react";
import styles from './ModuleDropdown.module.css';
import ModuleCell from "./ModuleCellView.tsx";
import Page from './PageInterface.tsx';
import BuilderData from "./BuilderData.tsx";
import { useScoreState } from "@/app/context.tsx";

interface ModuleDropdownProps{
    moduleName: string
}

const ModuleDropdown: React.FC<ModuleDropdownProps> = ({moduleName}) => {

    const [isActive,setIsActive] = useState<boolean>(false);
    const {score, quizzes, setScore, setQuizzes} = useScoreState();
    const buttonText = isActive ? <div className={styles.chevronUp}/>:<div className={styles.chevronDown}/> ;
    const pageIndex = parseInt(BuilderData[moduleName]['Intro'].correctPrompt);
    return (
        
        <div className = {quizzes[pageIndex] ? styles.ModuleFinished : styles.ModuleDropdown}>
            <div className = {styles.barContainer}>
                <h1>{moduleName}</h1>
                
                <button onClick={()=>{
                    setIsActive(!isActive);
                }}>
                    {buttonText}
                </button>
            </div>
            <div className={isActive ? styles.shownModule : styles.hiddenModule}>
                <ModuleCell pageData={BuilderData[moduleName]}/>
            </div>
        </div>

    );
}

export default ModuleDropdown;