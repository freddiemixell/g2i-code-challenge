import React from 'react';

export default function QuizBox() {
    return (
        <>
            <div className="container">
                <div className="question">
                    <p>Unturned originally started as a Roblox game.</p>
                </div>
            </div>
            <div className="container">
                <div className="answer">
                    <button className="answer__btn answer__btn-true">True</button>
                    <button className="answer__btn answer__btn-false">False</button>
                </div>
            </div>
        </>
    );
}