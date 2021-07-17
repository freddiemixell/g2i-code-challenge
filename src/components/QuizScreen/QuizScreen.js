import React, { useContext } from 'react';
import { FadeLoader } from 'react-spinners';

import QuizHeader from './QuizHeader';
import QuizBox from './QuizBox';
import QuestionCounter from './QuestionCounter';
import { Wrapper } from '../../utils/elements';
import { QuizContext } from '../QuizProvider/QuizProvider';

export default function QuizScreen() {
    let { isLoading } = useContext( QuizContext );

    return isLoading ? (
        <Loading/>
    ) : (
        <Wrapper>
            <QuizHeader/>
            <QuizBox/>
            <QuestionCounter/>
        </Wrapper>
    );
}

function Loading() {
    return (
        <Wrapper>
            <div style={{display:'flex', width: '100vw', height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
                <FadeLoader
                    height={15}
                    width={5}
                    radius={2}
                    margin={2}
                />
            </div>
        </Wrapper>
    );
}