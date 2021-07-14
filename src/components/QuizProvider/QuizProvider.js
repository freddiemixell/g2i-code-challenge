import React, { createContext, useEffect, useState } from 'react';

import useQuizAPI from '../../hooks/useQuizAPI/useQuizAPI';

export const QuizContext = createContext({});

export default function QuizProvider( { children } ) {
    let { results, getResults } = useQuizAPI();

    let [currentQuestion, setCurrentQuestion] = useState(1); 

    useEffect( () => {
        try {
            let q = async () => await getResults();
            q();
        } catch (error) {
            console.log(error)
        }
    }, [ results ] );

    let nextQuestion = () => {
        setCurrentQuestion( currentQuestion + 1 );
    }

    return (
        <QuizContext.Provider
            value={ {
                questions: results,
                currentQuestion,
                nextQuestion,
            } }
        >
            { children }
        </QuizContext.Provider>
    );
}