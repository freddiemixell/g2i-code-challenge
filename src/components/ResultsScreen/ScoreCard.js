import React, { useContext } from 'react';
import he from 'he';

import ScoreCardItem from './ScoreCardItem';
import {QuizContext} from '../QuizProvider/QuizProvider';

export default function ScoreCard() {
    let { answers, questions } = useContext( QuizContext );

    let scoredItems = questions.map( ( { question, correct_answer }, index ) => {
        let checkAnswer = correct_answer.toLowerCase() === answers[ index ];
        return (
            <ScoreCardItem
                questionText={ he.decode( question ) }
                isCorrect={ checkAnswer }
            />
        );
    } );

    return (
        <div className="container">
            { scoredItems }
        </div>
    );
}
