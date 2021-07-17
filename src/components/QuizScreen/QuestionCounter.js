import React, { useContext } from 'react';

import { Container } from '../../utils/elements';
import { QuizContext } from '../QuizProvider/QuizProvider';

export default function QuestionCounter() {
    let { currentQuestion = 0 } = useContext( QuizContext );
    return (
        <Container>
            <p>{ currentQuestion + 1 } of 10</p>
        </Container>
    );
}
