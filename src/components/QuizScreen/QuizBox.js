import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import he from 'he';

import {QuizContext} from '../../components/QuizProvider/QuizProvider';
import { Container, Button } from '../../utils/elements';

export default function QuizBox() {
    let { questions = [{category: ''}], currentQuestion = 1, nextQuestion = () => {} } = useContext( QuizContext );
    let history = useHistory();

    let question = typeof questions[currentQuestion] !== 'undefined' ? he.decode( questions[ currentQuestion ].question ) : 'Loading question...'

    return (
        <>
            <Container>
                <p className="question">{ question }</p>
            </Container>
            <Container>
                <div className="buttons">
                    <Button
                        onClick={() => {
                            let checkNext = nextQuestion( 'true' )
                            if ( ! checkNext ) {
                                history.push( '/results' )
                            }
                        }}
                    >
                        True
                    </Button>
                    <Button
                        onClick={() => {
                            let checkNext = nextQuestion( 'false' )
                            if ( ! checkNext ) {
                                history.push( '/results' )
                            }
                        }}
                    >
                        False
                    </Button>
                </div>
            </Container>
        </>
    );
}