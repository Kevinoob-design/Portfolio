import React from "react";
import SkillAvatar from "./AvatarSkillComponent";

const SkillComponent = (props) => {

    return ( 
        <div className="text-center max-w-xl mx-auto">
            <div className="flex flex-wrap justify-center m-5 text-5xl">
                {props.params.PLanguajes.map(element => {
                    return <SkillAvatar params={element}/>
                })}
            </div>
            <div className="flex flex-wrap justify-center m-5 text-4xl">
                {props.params.Skills.map(element => {
                    return <SkillAvatar params={element} />
                })}
            </div>
            <div className="flex flex-wrap justify-center m-5 text-4xl">
                {props.params.Languajes.map(element => {
                    return <div className="mx-2 border-4 rounded-lg overflow-hidden"><p>{element.content}</p></div>
                })}
            </div>
        </div>
     );
}
export default SkillComponent;