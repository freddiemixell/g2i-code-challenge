import React, { useContext } from 'react';

import { QuizContext } from '../QuizProvider/QuizProvider';
import { Container, Link } from '../../utils/elements';

export default function BeginBtn() {
    let { resetQuiz, answers } = useContext( QuizContext );

    return (
        <Container>
            <Link
                className="button"
                to="/quiz"
                onClick={ () => {
                    if ( answers.length > 0 ) {
                        resetQuiz();
                    }
                } }
            >
                Begin
            </Link>
        </Container>
    );
}