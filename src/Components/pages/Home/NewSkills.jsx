import React from "react";
import SkillModel from "./Model/NewSkills.json";
import SkillComponent from "./BodyComponents/NewSkillComponent";

const Skills = () => {
    return ( 
        <div data-aos="fade-in" data-aos-delay="300" data-aos-duration="600">
            {SkillModel.map(element => {
                return <SkillComponent params={element}/>
            })}
        </div>
     );
}
export default Skills;