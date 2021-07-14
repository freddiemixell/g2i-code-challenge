import React from 'react';

export default function HomeHeader() {
    return (
        <>
            <div className="container">
                <h1 className="title">Welcome to the Trivia Challenge!</h1>
            </div>
            <div className="container">
                <p>You will be presented with 10 true or false questions.</p>
            </div>
            <div className="container">
                <p>Can you score 100%?</p>
            </div>
        </>
    );
}