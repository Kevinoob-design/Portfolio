import React from "react";
import LazyLoad from 'react-lazy-load';

const PhotoContainer = (props) => {
    return (
        <LazyLoad offsetTop={200}> 
            <div className="my-2 shadow-6xl border-2 rounded" onClick={props.onClick.onClick} data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="top-bottom" id="PhotoContainer" >
                <img className="" src={props.params} alt={props.params.alt} />
            </div>
        </LazyLoad>
     );
}
export default PhotoContainer;