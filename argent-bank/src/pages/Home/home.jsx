import React from 'react';
import "./home.css";
import ImageTree from "../../assets/img/bank-tree.jpeg";
import IconChat from "../../assets/img/icon-chat.png";
import IconMoney from "../../assets/img/icon-money.png";
import IconSecurity from "../../assets/img/icon-security.png";

const home = () => {
    return (
        <div>
            <main>
                <section className ="banner-home">
                    <img src= {ImageTree} className="img-home" alt="pot-pieces"/>
                        <div className = "text-banner">
                        <h2 >Promoted Content</h2>
                        <p >No fees.</p>
                        <p >No minimum deposit.</p>
                        <p >High interest rates.</p>
                        <p >Open a savings account with Argent Bank today!</p>
                        </div>
                    </section>
                <section className="caracteristiques-section">
                    <h2 >Features</h2>
                    <div className= "caracteristiques">
                    <div className="caracteristique">
                        <img src={IconChat} alt="Chat Icon" className="icon-caracteristique" />
                        <h3 >You are our #1 priority</h3>
                        <p>Need to talk to a representative? You can get in touch through our
                        24/7 chat or through a phone call in less than 5 minutes.
                        </p>
                    </div>
                    <div className="caracteristique">
                        <img src={IconMoney} alt="Chat Icon" className="icon-caracteristique" />
                        <h3 >More savings means higher rates</h3>
                        <p>The more you save with us, the higher your interest rate will be!</p>
                    </div>
                    <div className="caracteristique">
                        <img src={IconSecurity} alt="Chat Icon" className="icon-caracteristique" />
                        <h3 >Security you can trust</h3>
                        <p>We use top of the line encryption to make sure your data and money
                        is always safe.
                        </p>
                    </div>
                    </div>
                </section>
            </main>
        </div>
    );
};
export default home;