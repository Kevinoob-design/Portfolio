function getPhotos() {

    let phot = [];

    for (let index = 1; index < 20; index++) {
        phot.push({src: "./Galery/Phot-" + index + ".jfif"});
    }
    return phot;
}
export const photos = getPhotos();