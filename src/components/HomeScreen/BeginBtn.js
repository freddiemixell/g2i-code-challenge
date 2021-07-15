import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { QuizContext } from '../QuizProvider/QuizProvider';

export default function BeginBtn() {
    let { resetQuiz } = useContext( QuizContext );

    return (
        <Link
            className="button"
            to="/quiz"
            onClick={ () => resetQuiz() }
        >
            Begin
        </Link>
    );
}