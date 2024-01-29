import React, { useState } from "react";
import styles from './ModuleDropdown.module.css';
import ModuleCell from "./ModuleCellView.tsx";
import Page from './PageInterface.tsx';
import BuilderData from "./BuilderData.tsx";

interface ModuleDropdownProps{
    moduleName: string
}

const ModuleDropdown: React.FC<ModuleDropdownProps> = ({moduleName}) => {

    const [isActive,setIsActive] = useState<boolean>(false);

    const buttonText = isActive ? <div>&#9650;</div>:<div>&#9660;</div> ;
    return (

        <div className = {styles.ModuleDropdown}>
            {moduleName}
            <button onClick={()=>{
                setIsActive(!isActive);
            }}>
                {buttonText}
            </button>
            <div className={isActive ? styles.shownModule : styles.hiddenModule}>
                <ModuleCell pageData={BuilderData[moduleName]}/>
            </div>
        </div>

    );
}

export default ModuleDropdown;