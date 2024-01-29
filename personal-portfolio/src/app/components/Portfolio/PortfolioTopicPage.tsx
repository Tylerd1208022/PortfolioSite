import React, { useState } from "react";
import styles from './PortfolioTopicPage.module.css'
import pageData from './TopicContent.tsx'
import ProjectCellView from "./ProjectCellView.tsx";

interface PortfolioTopicPageProps {
    Topic: string;
}

const PortfolioTopicPage: React.FC<PortfolioTopicPageProps> = ({Topic}) => {

    const topicData = pageData[Topic];

    if (!topicData) {
        return <div className="ErrorMSG">Topic Error - This Topic Does not Exist</div>
    }
    return (
        <div className={styles.TopicPage}>
            <h1>{topicData["title"]} Work and Experience</h1>
            <h2> {topicData["description"]} </h2>
            <h4>Applicable skills and technology</h4>
            <p>
                {topicData["skills"]}
            </p>
            <h3>My Work</h3>
            <ul>
                {Object.keys(topicData.projects).map((projectId) => {
                    const project = topicData.projects[projectId];
                    return(
                        <li key={projectId}>
                            <ProjectCellView 
                            Title={project.projectTitle} 
                            Description={project.projectDescription}
                            Image={project.projectImageFile}
                            Link={project.projectLink}
                            ImageSide={project.imageSide}/>
                        </li>
                    );
                })}
            </ul>
        </div>
    );

}

export default PortfolioTopicPage;