import React from "react";
import Card from 'react-bootstrap/Card';
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
import img11 from "../assets/0203.jpg";
import img12 from "../assets/0043.jpg";
import img13 from "../assets/0060.jpg";
import img14 from "../assets/0005.jpg";

function ImageCard( ) {
    const mediaData = [
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
        },
        {
            src: img11,
            alt: "wedding ceremony photo with a bride and groom"
        },
        {
            src: img12,
            alt: "mother and daughter smiling at each other getting ready for a wedding"
        },
        {
            src: img13,
            alt: "bride staring out a window with curled blonde hair"
        },
        {
            src: img14,
            alt: "female wedding party smiling getting ready for a wedding"
        },
    ]
    return (
        <section id="imageCard" className="imageCard">
            {mediaData[0] ? (
                mediaData.map((image) => (
                <Card style={{ width: `18rem`}} key={image.src} className="imageContainer">
                    <Card.Img style={{width: '100%', height: '80%'}} src={image.src} alt={image.alt} className="hairImage" />
                </Card>
                ))
                    // <div className="cardContainer">
                    //     <img src={image.src} alt={image.alt} height="500px"></img>
                    // </div>

            ) : null}

        </section>
    )
}

export default ImageCard;