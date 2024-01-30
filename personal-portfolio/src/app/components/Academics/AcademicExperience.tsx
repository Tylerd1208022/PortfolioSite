import React, { useState } from "react";
import styles from './AcademicExperience.module.css';
import classData from './AcademicExperienceContent.tsx';
import ClassTableView from './ClassTableView.tsx';
const AcademicExperience = () => {
    return (
      <div className={styles.AcademicExperience}> 
      <div className={styles.header}>
        Academic Experience
        </div>
        <div className= {styles.subheader}>
          BS, MS Computer Engineering, June 2024
        </div>
        <img src= "nu.jpeg"/>
        <h1>
          I came to NU at 2020 as a Computer Engineering student simultaneously enrolled in the rigorous Integrated Science Program. This program gave me a solid foundation in physics, mathematics, and overall scientific reasoning.
          After examining the cirriculum for further years however, I realized it was more focused towards a research pathway, and not the engineering pathway I aspired to follow. Once I realized this, I dropped out of the program, and once
          I was elligible, applied and was admitted to the Bachelor&#39;s/Master&#39;s program. This program allows me to use undergraduate tuition and financial aid towards graduate credit, and I already had so much credit from a combination of coursework,
          transfer credit from early enrollment courses, and AP credit that I will be able to finish the entirety of my MS inside of four years, simultaneously completing my MS and BS in Computer Engineering.
        </h1>
        <h2>
          At my time at Northwestern University, I have learned skills
          in both software and hardware engineering. Below are the courses I found the most impactful, along with the skills I picked up from them
        </h2>
        {Object.keys(classData).map((genreId)=>{
                    const classes = classData[genreId];
                    return (
                        <ClassTableView key={genreId} title={genreId}/>
                    );
          })}
      </div>  
    );
}

export default AcademicExperience;