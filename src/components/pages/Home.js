import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="content">
            <div className="jumbotron">
                <h1>Welcome!</h1>
                <p className="jumbo-text">Spoiler<span>Free</span> is a.. well.. spoiler free wiki for book series</p>
                <p className="jumbo-card-title">To get started follow these steps:</p>

                <div className="jumbo-card jumbo-card1">
                    <span>1</span>
                    <p>Choose book series</p>
                </div>
                <div className="jumbo-card jumbo-card2">
                    <span>2</span>
                    <p>Select the books you have read</p>
                </div>
                <div className="jumbo-card jumbo-card3">
                    <span>3</span>
                    <p>Choose a topic</p>
                </div>
                <Link className="jumbo-button" to="/wiki">Get started</Link>

            </div>


        </div>
    )
}
