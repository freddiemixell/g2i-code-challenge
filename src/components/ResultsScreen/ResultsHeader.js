import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import {QuizContext} from '../QuizProvider/QuizProvider';

import { Container, Title } from '../../utils/elements';

export default function ResultsHeader() {
    let history = useHistory();
    let { questions = [], answers = [] } = useContext( QuizContext );
    let [ correctAnswers, setCorrectAnswers ] = useState( 0 );

    useEffect( () => {
        if ( answers.length === 0 ) {
            return history.push( '/' );
        }
        let localCorrect = 0;
        questions.forEach( ( { correct_answer }, index ) => {
            if ( typeof answers[ index ] === 'undefined' ) {
                throw new Error( 'Questions and answers length don\'t match.' );
            }
            let checkAnswer = correct_answer.toLowerCase() === answers[ index ];
            if ( checkAnswer ) {
                localCorrect++;
            }
        } );
        setCorrectAnswers( localCorrect );
    }, [ answers, questions, history ] );

    return (
        <Container>
            <Title>
                You scored
                <br/>
                {correctAnswers}/10
            </Title>
        </Container>
    );
}