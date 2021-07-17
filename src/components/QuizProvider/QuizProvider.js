import React, { createContext, useEffect, useReducer } from 'react';

import useQuizAPI from '../../hooks/useQuizAPI/useQuizAPI';
import quizReducer, { initialState } from './QuizReducer';

export const QuizContext = createContext({});

export default function QuizProvider( { children } ) {
    let { getResults, isLoading = true } = useQuizAPI();

    let [ state, dispatch ] = useReducer( quizReducer, initialState );

    useEffect( () => {
        try {
            let q = async () => {
                try {
                    let results = await getResults();
                    dispatch( {
                        type: 'UPDATE_QUESTIONS',
                        payload: {
                            questions: [ ...results ],
                        },
                    } );
                } catch( error ) {
                    console.log( error )
                }
            };
            q();
        } catch (error) {
            console.log( error )
        }
    }, [ getResults ] );

    /**
     * Next Question Handler
     * @param {string} answer true or false as a string.
     * @returns true if theres more questions.
     */
    let nextQuestion = ( answer ) => {
        dispatch( {
            type: 'ADD_ANSWER',
            payload: { answer }
        } );

        dispatch( {
            type: 'NEXT_QUESTION',
        } );

        return ( state.currentQuestion + 1 ) > 9 ? false : true;
    }

    /**
     * Reset Quiz
     */
    let resetQuiz = async () => {
        // Reset questions first.
        dispatch( {
            type: 'RESET_QUIZ',
        } );
        // Get new questions for this quiz.
        try {
            let results = await getResults();
            dispatch( {
                type: 'UPDATE_QUESTIONS',
                payload: {
                    questions: [ ...results ],
                },
            } );
        } catch( error ) {
            console.log( error );
        }
    }

    return (
        <QuizContext.Provider
            value={ {
                questions: state.questions,
                answers: state.answers,
                currentQuestion: state.currentQuestion,
                nextQuestion,
                resetQuiz,
                isLoading,
            } }
        >
            { children }
        </QuizContext.Provider>
    );
}