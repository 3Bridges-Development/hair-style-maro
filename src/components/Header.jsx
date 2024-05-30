import React from "react";

function Header() {
    return (
        <section className="header">
            <div className="mainHeader">
                <h1 className="title">Hair <span className="byMaro">by Maro</span> </h1>
            </div>
            <section className="subHeader">
                <div className="subHeaderLabel">
                    <a href="#contact">Contact</a>
                </div>
                <div className="subHeaderLabel">
                    <a href="#gallery">Gallery</a>
                </div>
                <div className="subHeaderLabel">
                    <a href="#services">Services</a>
                </div>
                <div className="subHeaderLabel">
                    <a href="tel:858-442-0548" className="phone">(858)-442-0548</a>
                </div>
            </section>
        </section>
    )
}

export default Header