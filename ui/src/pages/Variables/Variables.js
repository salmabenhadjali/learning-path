import React from "react";
import './Variables.css';

const Variables = () => {
    return (
        <div class="variables">
            <header>
                <h1>Header</h1>
                <nav><h2>Nav</h2></nav>
            </header>

            <main>
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

export default Variables;