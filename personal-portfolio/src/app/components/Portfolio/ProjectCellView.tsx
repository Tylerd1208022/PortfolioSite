import React, { useState } from "react";
import styles from './ProjectCellView.module.css'


interface ProjectCellViewProps {
    Title: string;
    Description: string;
    Image: string;
    Link: string;
    ImageSide: string;
}



const ProjectCellView: React.FC<ProjectCellViewProps> = ({Title,Description,Image,Link,ImageSide}) => {
    const renderLink = () => {
        if (Link == "") {
            return (
                <div className={styles.noLink}>
                    This Project isn&#39;t Publicly availible at this time
                </div>
            );
        } if (Link != "self") {
            return <a href={Link} target="_blank" rel="noopener noreferrer">
                    View Project
                </a>;
        }
    }
    if (ImageSide == "Left"){
    return (
        <div className={styles.RowContainer}>
            <div className={styles.ImageContainer}>
                <img src={Image} alt={Title}/>
            </div>
            <div className={styles.TextContainer}>
                <h1>{Title}</h1>
                <p>{Description}</p>
                {renderLink()}
            </div>
        </div>
    );
    } else {
        return <div className={styles.RowContainer}>
            <div className={styles.TextContainer}>
                <h1>{Title}</h1>
                <p>{Description}</p>
                {renderLink()}
            </div>
            <div className={styles.ImageContainer}>
                <img src={Image} alt={Title}/>
            </div>
        </div>
    }
}

export default ProjectCellView;