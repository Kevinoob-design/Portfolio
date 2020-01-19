function photos() {

    let photos = [];

    for (let index = 1; index < 66; index++) {
        photos.push("./Galery/Phot-" + index + ".JPEG");
    }
    return photos;
}
export default photos();