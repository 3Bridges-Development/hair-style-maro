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

function ImageCard( ) {
    const mediaData = [
        {
            src: img1,
            alt: "blonde hair style"
        },
        {
            src: img2,
            alt: "",
        },
        {
            src: img3,
            alt: ""
        },
        {
            src: img4,
            alt: ""
        },
        {
            src: img5,
            alt: ""
        },
        {
            src: img6,
            alt: ""
        },
        {
            src: img7,
            alt: ""
        },
        {
            src: img8,
            alt: ""
        },
        {
            src: img9,
            alt: ""
        },
        {
            src: img10,
            alt: ""
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