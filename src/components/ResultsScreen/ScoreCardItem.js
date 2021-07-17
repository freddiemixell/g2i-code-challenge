import React from 'react';
import PropTypes from 'prop-types';

export default function ScoreCardItem( { questionText, isCorrect } ) {
    return (
        <div data-testid="scorecard__item">
            <p>{ isCorrect ? '+' : '-' } { questionText }</p>
        </div>
    );
}

ScoreCardItem.propTypes = {
    questionText: PropTypes.string,
    isCorrect: PropTypes.bool
}

ScoreCardItem.defaultProps = {
    questionText: '',
    isCorrect: false,
}