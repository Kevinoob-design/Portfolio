import React from "react";
import LazyLoad from 'react-lazy-load';

const PhotoContainer = (props) => {
    return (
        <div className="my-2 shadow-6xl border-2 rounded" onClick={() => props.click(props.index)} data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="top-bottom" id="PhotoContainer" >
            <LazyLoad offsetTop={200}> 
                <img className="" src={props.params.src} alt={props.params.alt} />
            </LazyLoad>
        </div>
     );
}
export default PhotoContainer;