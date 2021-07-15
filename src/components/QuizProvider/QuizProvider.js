import React, { createContext, useEffect, useReducer } from 'react';

import useQuizAPI from '../../hooks/useQuizAPI/useQuizAPI';
import quizReducer, { initialState } from './QuizReducer';

export const QuizContext = createContext({});

export default function QuizProvider( { children } ) {
    let { getResults } = useQuizAPI();

    let [ state, dispatch ] = useReducer( quizReducer, initialState );

    useEffect( () => {
        try {
            let q = async () => {
                let results = await getResults();
                dispatch( {
                    type: 'UPDATE_QUESTIONS',
                    payload: {
                        questions: [ ...results ],
                    },
                } );
            };
            q();
        } catch (error) {
            console.log(error)
        }
    }, [] );

    /**
     * Next Question Handler
     * @param {string} answer true or false as a string.
     * @returns true if theres more questions.
     */
    let nextQuestion = ( answer ) => {
        dispatch({
            type: 'ADD_ANSWER',
            payload: { answer }
        } );

        dispatch( {
            type: 'NEXT_QUESTION',
        } );

        return ( state.currentQuestion + 1 ) > 9 ? false : true;
    }

    return (
        <QuizContext.Provider
            value={ {
                questions: state.questions,
                answers: state.answers,
                currentQuestion: state.currentQuestion,
                nextQuestion,
            } }
        >
            { children }
        </QuizContext.Provider>
    );
}