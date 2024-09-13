import React from "react";
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav>
            <h2>CSS Menuss</h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/float">Float</Link>
                </li>
                <li>
                    <Link to="/columns">Columns</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;