import React from "react";

function Header() {
    return (
        <section className="header">
            <div className="mainHeader">
                <h1>Haera's Haircare</h1>
                <h2 className="subHeaderLabel">by Maro</h2>
            </div>
            <section className="subHeader">
                <div className="subHeaderLabel">
                    <h3>Images</h3>
                </div>
                <div className="subHeaderLabel">
                    <h3>Contact</h3>
                </div>
                <div className="subHeaderLabel">
                    <h3>XXX-XXX-XXXX</h3>
                </div>
            </section>
        </section>
    )
}

export default Header