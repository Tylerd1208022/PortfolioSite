import React, { useState } from "react";
import styles from './ModuleCellView.module.css';
import Page from './PageInterface.tsx';
import Module from "module";
import { useScoreState } from "@/app/context.tsx";
interface ModuleCellProps{
    pageData: Record<string,Page>;
}

const ModuleCell: React.FC<ModuleCellProps> = ({pageData}) => {

    const [currPage,setCurrPage] = useState<string>('Intro');
    const [currSelection,setCurrSelection] = useState<string>('0');
    const { score, setScore} = useScoreState();

    const getNextPageVal = (currentValue:string) => {
        const intVal: number = parseInt(currentValue);
        const maxVal: number = parseInt(pageData['Intro'].correctAnswer);
        if (intVal == maxVal){
            if (score < 11){
                setScore(score + 1);
            }
            return 'End';
        } else {
            const newVal: number = intVal + 1;
            return newVal.toString();
        }
    };

        switch(currPage) {
            case 'Intro':
                return (
                    <div className={styles.Modulecell}>
                        <div className = {styles.topLine}/>
                        {(pageData["Intro"].prompt)}
                        <div className={styles.startButton}>
                            <button
                            onClick={()=>{
                                setCurrPage('1');
                            }}>
                                Get Started
                            </button>
                        </div>
                    </div>);
            case 'End':
                return (
                    <div>{pageData[currPage].prompt}</div>
                );
            default:
                const thisPage: Page = pageData[currPage];
                return (
                    <div className={styles.operationPrompt}>
                        <div className={styles.topLine}/>
                        <div className = {styles.prompt}>{thisPage.prompt}</div>
                        <div className= {styles.buttonsRow}>
                        {Object.keys(thisPage.answers).map((answerKey)=>{
                                return (
                                    <button key={answerKey}
                                    className={
                                        (currSelection==answerKey) ? (
                                            currSelection==thisPage.correctAnswer ? styles.correctSelection : styles.incorrectSelection
                                        ) : styles.unselectedButton
                                    }
                                    onClick={()=>{
                                        setCurrSelection(answerKey)
                                    }}>
                                       {thisPage.answers[answerKey]}
                                     </button>
                                );
                            })}
                        </div>
                        <div className={currSelection == thisPage.correctAnswer ? styles.nextButton : styles.hiddenButton}>
                            <button onClick={()=>{
                                const nextNum: string = getNextPageVal(currPage);
                                setCurrSelection('0');
                                setCurrPage(nextNum);
                            }}>
                                Next Question
                            </button>
                        </div>
                        <div className={currSelection == thisPage.correctAnswer ? styles.correctPrompt : styles.hiddenPrompt}>
                            {thisPage.correctPrompt}
                        </div>
                    </div>
                    
                );
                };
}

export default ModuleCell;