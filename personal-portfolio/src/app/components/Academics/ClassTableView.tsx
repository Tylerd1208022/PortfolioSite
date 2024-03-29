import React, { useState } from "react";
import styles from './ClassTableView.module.css';
import classData from './AcademicExperienceContent.tsx';
import ClassCellView from "./ClassCell.tsx";
import { table } from "console";

interface AcademicExperienceProps {
    title: string
}

const ClassTableView: React.FC<AcademicExperienceProps> = ({title}) => {

    const [tableIsOpen,changeTableIsOpen] = useState<boolean>(true);

    const buttonLabel = tableIsOpen ? <div className={styles.chevronUp} />:<div className={styles.chevronDown}/> ;

    return (
        <div>
            <ul>
                <div className= {styles.Tab}>
                    <h1>
                        {title}
                    </h1>
                    <div className="flex-grow:1"/>
                    <button className={styles.button}
                    onClick={()=>changeTableIsOpen(!tableIsOpen)}>
                        {buttonLabel}
                    </button>
                </div>
                <div className={tableIsOpen ? styles.openTable : styles.closedTable}>
                    {Object.keys(classData[title]).map((classID)=>{
                        const thisClass = classData[title][classID];
                        return (
                            <ClassCellView key={classID} courseName={thisClass.courseName}
                            courseNum={thisClass.courseId}
                            description={thisClass.description}/>
                        );
                    })}
                </div>
            </ul>
        </div>
    );
}

export default ClassTableView;