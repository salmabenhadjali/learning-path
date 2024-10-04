import React from "react";
import './Pseudo.css';

const Pseudo = () => {
    return (
        <div class="pseudo">
            <header>
                <h1>Our Staff with pseudo</h1>
                <nav>
                    <a href="#profile1">Joe</a>
                    <a href="#profile2">Matt</a>
                    <a href="#profile3">Jane</a>
                </nav>
            </header>

            <main>
                <article id="profile1" class="card">
                    <figure>
                        <img src={`${process.env.PUBLIC_URL}/assets/profile1-500x500.png`} alt="Joe Coder" height="500" width="500"/>
                        <figcaption>Joe Coder</figcaption>
                    </figure>
                    <p>I code Staff</p>
                </article>
                <article id="profile2" class="card">
                    <figure>
                        <img src={`${process.env.PUBLIC_URL}/assets/profile2-500x500.png`} alt="Matt Designer" height="500" width="500"/>
                        <figcaption>Matt Designer</figcaption>
                    </figure>
                    <p>I design Staff</p>
                </article>
                <article id="profile3" class="card">
                    <figure>
                        <img src={`${process.env.PUBLIC_URL}/assets/profile3-500x500.png`} alt="Jane Dev Rel" height="500" width="500"/>
                        <figcaption>Jane <span className="nowrap">Dev Rel</span></figcaption>
                    </figure>
                    <p>I teach Staff</p>
                </article>
            </main>

            <footer>
                <p>&copy; Acme Co.</p>
            </footer>
        </div>
    );
}

export default Pseudo;