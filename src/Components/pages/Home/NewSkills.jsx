import React from "react";
import SkillModel from "./Model/NewSkills.json";
import SkillComponent from "./BodyComponents/NewSkillComponent";

const Skills = () => {
    return ( 
        <div>
            {SkillModel.map(element => {
                return <SkillComponent params={element}/>
            })}
        </div>
     );
}
export default Skills;