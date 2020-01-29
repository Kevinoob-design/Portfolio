//jshint esversion:6 

import React from "react";
import * as Icon from "react-icons/io";

export default function SocialStack(props){

    let SocialIcon = Icon[props.params.icon];

    return(
        <div className="inline-block mx-2">
            <a href={props.params.url}><SocialIcon className="text-2xl"/></a>
        </div>
    )
}