import React, { useState } from "react";
import styles from './ClassCell.module.css';

interface ClassCellViewProps{
    courseName: string
    courseNum: string
    description: string
}

const ClassCellView: React.FC<ClassCellViewProps> = ({courseName,courseNum,description}) => {
    return (
        <div className={styles.ClassCell}>
            <h2>{courseNum}</h2>
            <h3> {courseName}</h3>
            <p>{description}</p>
            <div className={styles.spacer}/>
        </div>
    );
}

export default ClassCellView;