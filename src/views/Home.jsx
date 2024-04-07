import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageGallery from "../components/ImageGallery";
import Contact from "../components/Contact";

function Home() {
        return (
                <div className="container-fluid home">
                        <Header />
                        <ImageGallery />
                        <Contact />
                        <Footer />
                </div>
        )
}

export default Home;