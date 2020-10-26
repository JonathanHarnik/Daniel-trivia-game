import React, { Component } from 'react'
import './About.css';
import {Link} from 'react-router-dom';
import daniel from '../images/daniel1.jpg';

export default class About extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <>
                <div className="about">
                    <h1 className="about-title">About</h1>
                    <div className="about-content">
                        <div className="about-text">
                            <p>It is a long time tradition that on Daniel's birthday we play a trivia game to see who of his friends know him best.
                                The questions are multible choice and the winner recieves a prize - such as a t-shirt with Daniel's face printed on it, or a trophy with Daniel's face printed on it, whatever the prize is - Danil's face will be on it, 
                                so the winner will always remember his victory of knowledge about Daniel.
                            </p>
                            <Link to="/play" className="about-btn">Play now!</Link>
                        </div>
                        
                        {/* <div className="about-img"> */}
                            <img src={daniel}/>
                        {/* </div> */}
                    </div>
                </div>
            </>
        )
    }
}
