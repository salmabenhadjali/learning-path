import React from "react";
import './GridLayout.css';

const GridLayout = () => {
    return (
        <div class="grid-layout">
            <header className="header el"><h1>Header</h1></header>
            <main class="container grid">
                <div class="box-grid">1</div>
                <div class="box-grid">2</div>
                <div class="box-grid">3</div>
                <div class="box-grid">4</div>
                <div class="box-grid">5</div>
                <div class="box-grid">6</div>
            </main>
            <aside className="sidebar el"><h2>Sidebar</h2></aside>
            <footer className="footer el"><h2>Footer</h2></footer>
        </div>
    );
}

export default GridLayout;