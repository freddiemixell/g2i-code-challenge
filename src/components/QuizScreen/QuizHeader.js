import React, { useContext } from 'react';

import { QuizContext } from '../QuizProvider/QuizProvider';
import { Container, Title } from '../../utils/elements';

export default function QuizHeader() {
    let { questions = [{category: ''}], currentQuestion = 0 } = useContext( QuizContext );

    let title = typeof questions[currentQuestion] !== 'undefined' ? questions[currentQuestion].category : '';
    return title ? (
        <Container>
            <Title>{ title }</Title>
        </Container>
    ) : null;
}
