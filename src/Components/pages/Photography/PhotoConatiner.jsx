import React from "react";
import LazyLoad from 'react-lazy-load';

const PhotoContainer = (props) => {
    return (
        <div className="my-2 shadow-6xl border-2 border-gray-800 rounded overflow-hidden " onClick={() => props.click(props.index)} data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="top-bottom" data-aos-mirror={false} >
            <img id="PhotoContainer" className="" src={props.params.src} alt={props.params.alt} />
        </div>
     );
}
export default PhotoContainer;