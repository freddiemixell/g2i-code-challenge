import React from 'react';

import ResultsHeader from './ResultsHeader';
import ScoreCard from './ScoreCard';
import PlayAgainBtn from './PlayAgainBtn';
import { Wrapper } from '../../utils/elements';

export default function ResultsScreen() {
    return (
        <Wrapper>
            <ResultsHeader/>
            <ScoreCard/>
            <PlayAgainBtn/>
        </Wrapper>
    );
}