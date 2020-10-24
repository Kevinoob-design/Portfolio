import React from "react";
import SkillModel from "./Model/NewSkills.json";
import SkillComponent from "./BodyComponents/NewSkillComponent";

const Skills = () => {
    return (
        <div  id="skills">
            <div className="md:w-1/2 w-auto text-3xl text-center rounded mx-auto">
                <b>Skills</b>
            </div>
            {SkillModel.map(element => {
                return <SkillComponent params={element} />
            })}
        </div>
    );
}
export default Skills;