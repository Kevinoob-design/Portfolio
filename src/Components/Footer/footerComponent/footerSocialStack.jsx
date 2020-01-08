//jshint esversion:6 

import React from "react";

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function SocialStack(props){

    const MaterialIcon = ({icon}) => {
        switch (props.params.icon) {
            case "LinkedInIcon": return (<LinkedInIcon />);
            case "InstagramIcon": return (<InstagramIcon />);
            case "GitHubIcon": return (<GitHubIcon />);
            case "TwitterIcon": return (<TwitterIcon/>);
        }
    }
    return(
        <div className="inline-block mx-2">
            <a href={props.params.url}><MaterialIcon fontSize="large"/></a>
        </div>
    )
}