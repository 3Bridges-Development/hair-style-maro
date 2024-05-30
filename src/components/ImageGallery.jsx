import React from "react";
import ImageCard from "./CardForImages";

function ImageGallery() {
    return (
        <section id="gallery" className="gallery">
            <h3>Gallery</h3>
            <p className="gallerySubtext">Specializing in wedding hair styles</p>
            <ImageCard />
        </section>
    )
}

export default ImageGallery;