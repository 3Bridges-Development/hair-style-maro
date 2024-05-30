import React from "react";
import Carousel from 'better-react-carousel';
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/0043.jpg";
import img12 from "../assets/0060.jpg";


function ImageCard() {
    const mediaData = [
        {
            src: img11,
            alt: "mother and daughter smiling at each other getting ready for a wedding"
        },
        {
            src: img12,
            alt: "bride staring out a window with curled blonde hair"
        },
        {
            src: img1,
            alt: "blonde up hair style"
        },
        {
            src: img2,
            alt: "blonde up hair style"
        },
        {
            src: img3,
            alt: "blonde up hair style curled"
        },
        {
            src: img4,
            alt: "blonde up hair style curled"
        },
        {
            src: img5,
            alt: "blonde up hair style curled"
        },
        {
            src: img6,
            alt: "blonde up hair style curled"
        },
        {
            src: img7,
            alt: "blonde up hair style curled"
        },
        {
            src: img8,
            alt: "blonde up hair style curled"
        },
        {
            src: img9,
            alt: "blonde up hair style curled"
        },
        {
            src: img10,
            alt: "blonde up hair style curled"
        }

    ]
    return (
        <Carousel cols={3} rows={1} loop={true} id="imageCard">
            {mediaData[0] ? (
                mediaData.map((image) => (
                    <Carousel.Item key={image.src}>
                        <img style={{ width: '100%', maxWidth: '350px', height: '100%', maxHeight: '350px' }} src={image.src} alt={image.alt} />
                    </Carousel.Item>
                ))
            ) : null}
        </Carousel>
    )
}

export default ImageCard;