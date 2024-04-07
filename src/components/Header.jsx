import React from "react";

function Header() {
    return (
        <section className="header">
            <div className="mainHeader">
                <h1>Creative Expression </h1>
                <h2 className="subHeaderLabel">by Maro</h2>
            </div>
            <section className="subHeader">
                <div className="subHeaderLabel">
                    <h3>Images</h3>
                </div>
                <div className="subHeaderLabel">
                    <a href="#contact">Contact</a>
                </div>
                <div className="subHeaderLabel">
                    <h3>(858)-442-0548</h3>
                </div>
            </section>
        </section>
    )
}

export default Header