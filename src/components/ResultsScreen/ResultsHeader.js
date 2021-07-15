import React, { useContext, useState, useEffect } from 'react';

import {QuizContext} from '../QuizProvider/QuizProvider';

export default function ResultsHeader() {
    let { questions, answers } = useContext( QuizContext );
    let [ correctAnswers, setCorrectAnswers ] = useState( 0 );

    useEffect( () => {
        let localCorrect = 0;
        questions.forEach( ( { correct_answer }, index ) => {
            let checkAnswer = correct_answer.toLowerCase() === answers[ index ];
            if ( checkAnswer ) {
                localCorrect++;
            }
        } );
        setCorrectAnswers( localCorrect );
    }, [] );

    return (
        <div className="container">
            <h1 className="title">
                You scored
                <br/>
                {correctAnswers}/10
            </h1>
        </div>
    );
}