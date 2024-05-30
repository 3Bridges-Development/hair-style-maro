import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageGallery from "../components/ImageGallery";
import Contact from "../components/Contact";
import Services from "../components/Services";

function Home() {
        return (
                <div className="container-fluid home">
                        <Header />
                        <Contact />
                        <ImageGallery />
                        <Services />
                        <Footer />
                </div>
        )
}

export default Home;