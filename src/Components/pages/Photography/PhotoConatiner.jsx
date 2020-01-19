import React from "react";

const PhotoContainer = (props) => {
    return (
        <div className="my-2 shadow-6xl border-2 rounded" onClick={props.onClick.onClick} data-aos="fade-in" data-aos-duration="2000" id="PhotoContainer" >
            <img className="align-top" src={props.params} alt={props.params.alt} />
        </div>
     );
}
export default PhotoContainer;