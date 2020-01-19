function getPhotos() {

    let phot = [];

    for (let index = 1; index < 66; index++) {
        phot.push({src: "./Galery/Phot-" + index + ".JPEG"});
    }
    return phot;
}
export const photos = getPhotos();