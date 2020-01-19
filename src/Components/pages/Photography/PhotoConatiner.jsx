import React from "react";

const PhotoContainer = (props) => {
    return (
        <div className="my-2 shadow-6xl border-2 rounded" onClick={props.onClick.onClick} data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="top-bottom" id="PhotoContainer" >
            <img className="align-top" src={props.params} alt={props.params.alt} />
        </div>
     );
}
export default PhotoContainer;