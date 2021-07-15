import React from 'react';

export default function ScoreCardItem( { questionText = '', isCorrect = false } ) {
    return (
        <div class="scorecard__item">
            <p>{ isCorrect ? '+' : '-' } { questionText }</p>
        </div>
    );
}