import React from "react";
import './Position.css';

const Position = () => {
    return (
        // <div class="outer-container">
        //     <div class="inner-container">
        //         <div class="box absolute">
        //             <p>Absolute</p>
        //         </div>
        //         <div class="box relative">
        //             <p>Relative</p>
        //         </div>
        //         <div class="box fixed">
        //             <p>Fixed</p>
        //         </div>
        //         <div class="box sticky">
        //             <p>Sticky</p>
        //         </div>
        //     </div>
        // </div>
        <div class="outer-container">
            <button class="social">Go social</button>
            <section id="one">
                <header class="blue">Header One</header>
                <h2>One</h2>
            </section>
            <section id="two">
                <header class="red">Header Two</header>
                <h2>Two</h2>
            </section>
            <section id="three">
                <header class="green">Header Three</header>
                <h2>Three</h2>
            </section>
            <footer>
                <a href="#one">One</a> |
                <a href="#two">Two</a> |
                <a href="#three">Three</a>
            </footer>
        </div>
    );
}

export default Position;