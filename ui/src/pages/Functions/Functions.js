import React from "react";
import './Functions.css';

const Functions = () => {
    return (
        <div class="functions">
            <header>
                <h1>Header</h1>
                <nav><h2>Nav</h2></nav>
            </header>

            <main>
                {/* <section>
                    <h2>My heading</h2>
                    <p className="content">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias perferendis 
                        veritatis cum tenetur illum, quod voluptate dolor vero? Porro explicabo soluta 
                        pariatur veritatis ullam distinctio adipisci, qui minus voluptate inventore!
                    </p>
                    <br></br>
                    <a href="http://www.google.com">Google</a> 
                </section>
                <aside>
                    <h2>Aside</h2>
                    <p className="content">
                        <span className="tooltip" data-tooltip="This is Latin">Lorem</span> ipsum 
                        dolor, sit amet consectetur adipisicing elit. Alias perferendis veritatis 
                        cum tenetur illum, quod voluptate dolor vero? Porro explicabo soluta pariatur 
                        veritatis ullam distinctio adipisci, qui minus voluptate inventore!
                    </p>
                </aside> */}
                
                <div className="square"><p>Hey</p></div>
                <div className="square">💻</div>
                <div className="square">💻</div>
                <div className="square">💻</div>
                <div className="square">💻</div>
                <div className="square">💻</div>
                <div className="square">💻</div>
                <div className="square square--highlight">💻</div>
                <div className="square">💻</div>
                <div className="square">💻</div>
                <div className="square">💻</div>
                <div className="square">💻</div>
            </main>

             <footer>
                <h2>Footer</h2>
            </footer>
        </div>
    );
}

export default Functions;