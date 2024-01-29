import React, { useState } from "react";
import styles from './ProfessionalExperience.module.css'

const ProfessionalExperience = () => {
    return (
        <div className={styles.ProfessionalExperience}>
            <h1> Professional Experience </h1>
            <h2> Industry Experience </h2>
            <p>
                While I have been in college, I have dedicated a large amount of time to my business, Electric Personal Training. This business involves both in person personal training, and app development for EPT Pocket Trainer, my publicly availible iOS app. Throughout
                my time here, I have improved my leadership and time management skills, my ability to work with others and develop meaningful, effective solutions to their problems, and most importantly, I have been able to make a positive
                impact on the lives of my clients.
            </p>
            <div className={styles.horizontalImages}>
                <img src="logo2.jpeg" alt="EPT Logo"/>
                <img src="PocketTrainer.png" alt="Pocket Trainer"/>
            </div>
            <p>
                Developing my app also taught me many skills I would have never gained with coursework alone. Aspects of application development like maintaining clean code, version management, handling the unpredictable lifecycle of the app,
                and developing scalable architecture so that it remains affordable to support were among the many valuable lessons I was able to gain from developing this app. It is my hope that it will continue to grow in users, so that anyone who wants
                to learn more about fitness, stay accountable, share workouts with friends, and improve their workout routine all around can do so through my app completely free of charge.
            </p>
            <h2> Research Experience </h2>
            <p>
                Any extra time I had between classes and work I spent working with the PARAG@N (Parallel Architecture Group At Northwestern) lab group. I joined the summer after my junior year, as taking both COMP_ENG 368 (Programming Massively Parallel Processors with CUDA) and COMP_ENG 456 (Modern Computer Arcthitecture),
                piqued my interest, and I expressed this interest to Professor Nikos Hardavellas, who taught both these classes, and he offered me the opportunity to help one of his PhD students with a project. From then on I began working on the physical components necessary to realize our goals.
            </p>
            <img src="Paragon.png" alt="Paragon Logo"/>
            <p>
                My role on this team, along with attending meetings and discussing the overall project, was to develop hardware models to assess the impact of various changes to a processor that were necessary to our design. This was done with the Cadence EDA tool suite, which allowed us to assess power, area, and performance
                costs of several different iterations to our solution to the problem. By being part of this process, I was able to gain more experience working in an organized team on a huge project, as well as being able to better understand research methodology and how to academically approach the task of producing new knowledge.
                Above all else, my largest takeaway from my time at PARAG@N was being able to learn from the way my teammates think and solve problems. Having the chance to work with so many brilliant people all at once has given me the confidence to pursue my own technological interests further,
                and expand my way of thinking far beyond what coursework alone encourages.
            </p>
        </div>
    );
};

export default ProfessionalExperience;