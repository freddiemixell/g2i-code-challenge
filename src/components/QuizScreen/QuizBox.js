import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import he from 'he';

import {QuizContext} from '../../components/QuizProvider/QuizProvider';

export default function QuizBox() {
    let { questions, currentQuestion, nextQuestion } = useContext( QuizContext );
    let history = useHistory();

    let question = typeof questions[currentQuestion] !== 'undefined' ? he.decode( questions[ currentQuestion ].question ) : 'Loading question...'

    return (
        <>
            <div className="container">
                <div className="question">
                    <p>{ question }</p>
                </div>
            </div>
            <div className="container">
                <div className="answer">
                    <button
                        className="answer__btn answer__btn-true"
                        onClick={() => {
                            let checkNext = nextQuestion( 'true' )
                            if ( ! checkNext ) {
                                history.push( '/results' )
                            }
                        }}
                    >
                        True
                    </button>
                    <button
                        className="answer__btn answer__btn-false"
                        onClick={() => {
                            let checkNext = nextQuestion( 'false' )
                            if ( ! checkNext ) {
                                history.push( '/results' )
                            }
                        }}
                    >
                        False
                    </button>
                </div>
            </div>
        </>
    );
}