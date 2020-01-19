import React, { useState, useCallback } from "react";
import PhotoContainer from "./PhotoConatiner";
import photos from "./Galery"
import Carousel, { Modal, ModalGateway } from "react-images";

const ShowCase = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        alert()
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return ( 
        <div id="Galery" className="px-1 pt-12 md:p-32 text-center align-top shadow-2xl">

            {photos.map((element, index) => { return <PhotoContainer params={element} onClick={openLightbox} />  } )}

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
     );
}
 
export default ShowCase;