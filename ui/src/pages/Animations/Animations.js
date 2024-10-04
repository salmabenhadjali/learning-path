import React from "react";
import { Link } from 'react-router-dom';
import './Animations.css';

const Animations = () => {
    return (
        // <div class="animations">
        //     <main>
        //         <div className="square">🚀</div>
        //         <div className="square">🔔</div>
        //         <div className="square animate">🎷</div>
        //     </main>
        // </div>

        <div class="animations">
            <header>
                <section className="header-title-line">
                    <h1>Acme Co.</h1>
                    <button className="menu-button">
                        <div className="menu-icon"></div>
                    </button>
                </section>
                <nav>
                    <ul>
                        <li><Link to="/products">Products</Link></li> 
                        <li><Link to="#">Forum</Link></li> 
                        <li><Link to="#">About</Link></li> 
                        <li><Link to="#">Contact</Link></li> 
                        {/* <li><a href="#"></a>Forum</li> 
                        <li><a href="#"></a>About</li> 
                        <li><a href="#"></a>Contact</li>  */}
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Animations;