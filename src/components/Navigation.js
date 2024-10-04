import React from "react";
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav class="menu">
            <h2>CSS Menus</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/float">Float</Link></li>
                <li><Link to="/columns">Columns</Link></li>
                <li><Link to="/position">Position</Link></li>
                <li><Link to="/flexbox">Flexbox</Link></li>
                <li><Link to="/grid-layout">GridLayout</Link></li>
                <li><Link to="/images">Images</Link></li>
                <li><Link to="/media-queries">Media Queries</Link></li>
                <li><Link to="/card-project">Card Project</Link></li>
                <li><Link to="/pseudo">Pseudo</Link></li>
                <li><Link to="/variables">Variables</Link></li>
                <li><Link to="/functions">Functions</Link></li>
                <li><Link to="/animations">Animations</Link></li>
                <li><Link to="/organizations">Organizations</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;