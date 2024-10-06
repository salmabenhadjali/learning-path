import React from "react";
import './Organization.css';

const Organization = () => {
    return (
        <div class="organization">
            <header>
                <h1 className="header__title">BEM</h1>
                <nav className="header__nav">
                    <button className="header__btn">🚀</button>
                    <button className="header__btn header__btn--secondary">🔔</button>
                    <button className="header__btn header__btn--secondary header__btn--border-lg">🎷</button>
                </nav>
            </header>
        </div>
    );
}

export default Organization;