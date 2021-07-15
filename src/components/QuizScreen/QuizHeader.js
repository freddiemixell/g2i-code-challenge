import React, { useContext } from 'react';

import { QuizContext } from '../QuizProvider/QuizProvider';

export default function QuizHeader() {
    let { questions, currentQuestion  } = useContext( QuizContext );

    let title = typeof questions[currentQuestion] !== 'undefined' ? questions[currentQuestion].category : '';
    return title ? (
        <div className="container">
            <h1 className="title">{ title }</h1>
        </div>
    ) : null;
}