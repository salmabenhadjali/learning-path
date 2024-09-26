import React from "react";
import './CardProject.css';

const CardProject = () => {
    return (
        <div class="card-project">
            <header>
                <h1>Our Staff</h1>
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
                    <p><q>I code Staff</q></p>
                </article>
                <article id="profile2" class="card">
                    <figure>
                        <img src={`${process.env.PUBLIC_URL}/assets/profile2-500x500.png`} alt="Matt Designer" height="500" width="500"/>
                        <figcaption>Matt Designer</figcaption>
                    </figure>
                    <p><q>I design Staff</q></p>
                </article>
                <article id="profile3" class="card">
                    <figure>
                        <img src={`${process.env.PUBLIC_URL}/assets/profile3-500x500.png`} alt="Jane Dev Rel" height="500" width="500"/>
                        <figcaption>Jane <span className="nowrap">Dev Rel</span></figcaption>
                    </figure>
                    <p><q>I teach Staff</q></p>
                </article>
            </main>

            <footer>
                <p>&copy; Acme Co.</p>
            </footer>
        </div>
    );
}

export default CardProject;