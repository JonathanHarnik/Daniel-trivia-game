import React, { Component } from 'react'
import './HomePage.css';
import {Link} from 'react-router-dom';

export default class HomePage extends Component {
    
    render() {
        return (
            <>
                <div className="hero">
                    <div className="hero-text">
                        <p>Do you think you know?</p>
                    </div>
                    <div className="hero-btn">
                            <Link to='/play' className="hero-link">Play!</Link>
                    </div>
                </div>
            </>
        )
    }
}
