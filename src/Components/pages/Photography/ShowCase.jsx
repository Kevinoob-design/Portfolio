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
        <div className="text-center mx-3 my-5">
            <div className="md:w-1/2 w-auto text-2xl text-center mx-auto shadow-inner rounded bg-gray-900 my-5"><b>GALERY</b></div>
            <div id="Galery" className="px-1 py-12">
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
        </div>
     );
}
 
export default ShowCase;