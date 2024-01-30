import React, { useState } from "react";
import styles from './AboutMePage.module.css';
import SocialBar from "./SocialBar";
const AboutMePage = () => {

    return (
        <div className={styles.AboutMePage}>
            <div>
                <h1>About Me</h1>
            </div>
            <div>
                <h2>Who I Am</h2>
            </div>
                <p>My name is Tyler Dempski, I am currently enrolled at Northwestern University where I will be obtaining both my BS and MS in Computer Engineering in June of 2024. In my time at Northwestern I have strived for no less than excellence in every challenge I take on - whether it is academics, outside projects, running my own business, or participating in reasearch.</p>
                <p>As a Computer Engineering Major, I have been exposed to all levels of the tech stack, from transistors to typescript. In my pursuit of understanding, I have developed a thorough portfolio of projects demonstrating my understanding
                    of all kinds of programming and electronic system design, all of which are availible to preview on this website. Since I was able to begin college with a large amount of college credit from AP courses and college courses taken in high school,
                    I have been able to devote enough credits into Computer Science, Computer Engineering, and Electrical Engineering classes to obtain my Master&#39;s degree at the same time as my Bachelor&#39;s degree, as well as more ability to take advantages of the
                    high quality courses, resources, and professors that Northwestern has to offer.
                </p>
                <div className={styles.imageRow}>
                    <img src="Capstone.png" alt="Capstone"/>
                    <img src="Webcam.png" alt="Webcam"/>
                </div>
                <p>
                    Outside of class I have been busy as well. As a passionate exercise enthusiast I began to work part time as a Personal Trainer at LA Fitness nearby. When this location closed abruptly, I decided to begin my own training practice right off campus.
                    In order to combine my passions of computer programming and exercise, I created EPT Pocket Trainer, my fitness tracker and social platform workout compnaion app all wrapped into one.
                    This app allows my users to engage with eachother, share achievements, and for those I work with, recieve feedback on their workouts from me in real time. More information, including the app store link,
                    are availible in the &#39;High Level Programming&#39; page.
                </p>
                <div className={styles.imageRow}>
                    <img src="LegPress.png" alt="Legpress"/>
                    <img src="Joust.png" alt="Joust"/>
                </div>
                <p>
                    Between working and school, I also spend time working with the PARAG@N lab group, where I aid my team by creating hardware models for our proposed designs, and evaluate them based on their physical
                    characteristics using the Cadence EDA tool suite. Currently, our work has been submitted to ISCA&#39;24, with the hope of being published later this year.
                </p>
                <p>
                    In my free time I enjoy working out, spending time with friends and family, and using my tech skills to plan new side projects as well as working on current ones.
                </p>
                <div className={styles.imageRow}>
                    <img src="Family.png" alt="Family"/>
                    <img src="Amber.png" alt="Family2"/>
                </div>
                <div className={styles.imageRow}>
                    <img src="Bench.png" alt="Bench"/>
                    <img src="Jack.png" alt="Jacked Sparrow"/>
                </div>
            <div>
                <h2>My Goals</h2>
            </div>
                <p>
                    It isn&#39;t uncommon that I&#39;m asked why I chose computer engineering, as opposed to computer science, as CompE is not a very popular discipline. The reason is that I
                    have always been someone who wants to know how things work, and I have always been baffled by how a small wafer of silicon is capable of bringing about world wide communication
                    and data processing. For that reason, I came to Northwestern with the goal of answering that question, and at this point, I have not only learned how they work, but also how they can be
                    designed to be efficient and user friendly so that semiconductor devices can continue in their world wide improvement of quality of life, communication, and technological progress.
                </p>
                <p>
                    My goal beyond graduation is to use these skills to develop systems that improve the experience of a wide range of users. It is very important to me that I have
                    a meaningful impact with my work, and that I am able to clearly see that impact. I am also seeking opportunities that allow me to make that impact by spending most of my time
                    doing the real engineering work. I want to develop my skills gained in college into advanced expertise through commercial engineering work, so that I can become a better engineer
                    every day.
                </p>
            <div>
                <h2>Contact Me</h2>
                <p>
                    I am always open to new opportunities and collaboration. Click below to reach me on any platform.
                </p>
                <div className={styles.SocialBar}>
                    <SocialBar/>
                </div>
            </div>
        </div>
    );
}

export default AboutMePage;