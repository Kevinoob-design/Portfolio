import React from "react";
import * as Icon from "react-icons/di";

const SkillAvatar = (props) => {

    let SkillIcon = Icon[props.params.icon];

    return ( 
        <div>
            <div className={"border-4 rounded-full overflow-hidden p-1 mx-5 " + props.params.color}>
                <SkillIcon />
            </div>
            <div>
                <p className="text-base">{props.params.label}</p>
            </div>
        </div>
     );
}
export default SkillAvatar;