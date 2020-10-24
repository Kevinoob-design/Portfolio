import React from "react";
import * as Icon from "react-icons/si";

const SkillAvatar = (props) => {

    let SkillIcon = Icon[props.params.icon];

    return ( 
        <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="600" data-aos-mirror={false}
        className="bg-gray-900 shadow-2xl md:m-5 m-2 md:p-5 p-3 md:w-40 w-32 md:h-40 h-32 justify-center">
            <SkillIcon className="mx-auto w-10 h-10 mb-5 mt-5"/>
            <p className="text-base text-xl">{props.params.label}</p>
        </div>
     );
}
export default SkillAvatar;