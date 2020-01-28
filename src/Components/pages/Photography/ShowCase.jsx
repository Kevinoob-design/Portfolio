import React, { useState, useCallback } from "react";
import PhotoContainer from "./PhotoConatiner";
// import photos from "./Galery"
import {photos} from "./Galery"
import Carousel, { Modal, ModalGateway } from "react-images";

const ShowCase = () => {

    console.table(photos);

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

        const openLightbox = useCallback((index) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return ( 
        <div className="text-center mx-3 my-3">
            <div id="Galery" className="px-1 pt-12">
            {photos.map((element, index) => { return <PhotoContainer params={element} index={index} click={openLightbox} />  } )}
            <ModalGateway>
                {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                    <Carousel
                    currentIndex={currentImage}
                    views={photos.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                    }))}
                    />
                </Modal>
                ) : null}
            </ModalGateway>
            </div>
            {/* <div className="text-2xl items-center pb-12 underline"><p>Shoot with my phone</p></div> */}
        </div>
     );
}
 
export default ShowCase;