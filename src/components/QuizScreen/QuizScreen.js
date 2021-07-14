import React from 'react';

import QuizHeader from './QuizHeader';
import QuizBox from './QuizBox';

export default function QuizScreen() {
    return (
        <div className="section">
            <QuizHeader/>
            <QuizBox/>
        </div>
    );
}