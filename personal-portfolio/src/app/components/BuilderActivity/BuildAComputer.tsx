import React, { useState } from "react";
import styles from './BuildAComputer.module.css';
import BuilderData from "./BuilderData";
import ModuleDropdown from "./ModuleDropdown";
const BuildAComputer = () => {
    return (
        <div className={styles.BuildAComputer}>
            <div className={styles.Title}>Build Your Own Computer!</div>
            <h1>
                When I chose computer engineering, I did so because I wanted to understand how it was possible to create a world wide web of communication, picosecond speed processing, and unending exponential technological progress with some clever combination of metals. As a way of answering my question for anyone not able to spend four years learning it, this activity walks through the very basics of computer system design - from absolutely nothing to machine learning, web applications, and high performance processing!
            </h1>
            <h2>
                Select a Module to start.
            </h2>
            <div className={styles.ModuleList}>
                {Object.keys(BuilderData).map((moduleName)=>{
                    return (
                        <ModuleDropdown moduleName={moduleName}/>
                    );
                })}
            </div>
        </div>
    );
}

export default BuildAComputer;