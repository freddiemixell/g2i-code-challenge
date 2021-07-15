import React, { createContext, useEffect, useState } from 'react';

import useQuizAPI from '../../hooks/useQuizAPI/useQuizAPI';

export const QuizContext = createContext({});

export default function QuizProvider( { children } ) {
    let { results, getResults } = useQuizAPI();

    let [currentQuestion, setCurrentQuestion] = useState(0);
    let [answers, setAnswers] = useState([]);

    useEffect( () => {
        try {
            let q = async () => await getResults();
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

        let nextAnswers = [ ...answers ]
        nextAnswers[ currentQuestion ] = answer;
        setAnswers( nextAnswers );

        setCurrentQuestion( currentQuestion + 1 );

        return ( currentQuestion + 1 ) > 9 ? false : true;
    }

    return (
        <QuizContext.Provider
            value={ {
                questions: results,
                answers,
                currentQuestion,
                nextQuestion,
            } }
        >
            { children }
        </QuizContext.Provider>
    );
}