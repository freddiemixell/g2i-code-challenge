import React from 'react';
import { Link } from 'react-router-dom';

export default function PlayAgainBtn() {
    return (
        <div className="container">
            <Link
                className="button button__playagain"
                to="/"
            >
                Play Again?
            </Link>
        </div>
    );
}