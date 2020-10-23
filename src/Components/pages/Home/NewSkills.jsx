import React from "react";
import SkillModel from "./Model/NewSkills.json";
import SkillComponent from "./BodyComponents/NewSkillComponent";

const Skills = () => {
    return ( 
        <div data-aos="fade-in" data-aos-delay="300" data-aos-duration="600" data-aos-mirror={false} data-aos-once={true}>
            <div className="md:w-1/2 w-auto text-2xl text-center mx-auto shadow-inner rounded bg-gray-900"><b>SKILLS</b></div>
            {SkillModel.map(element => {
                return <SkillComponent params={element}/>
            })}
        </div>
     );
}
export default Skills;