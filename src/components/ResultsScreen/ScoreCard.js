import React, { useContext } from 'react';
import he from 'he';

import ScoreCardItem from './ScoreCardItem';
import {QuizContext} from '../QuizProvider/QuizProvider';
import { Container } from '../../utils/elements';

export default function ScoreCard() {
    let { answers = [], questions = [] } = useContext( QuizContext );

    let scoredItems = questions.map( ( { question, correct_answer }, index ) => {
        let checkAnswer = correct_answer.toLowerCase() === answers[ index ];
        return (
            <ScoreCardItem
                key={ question }
                questionText={ he.decode( question ) }
                isCorrect={ checkAnswer }
            />
        );
    } );

    return (
        <Container>
            { scoredItems }
        </Container>
    );
}
