import React from 'react';

import ResultsHeader from './ResultsHeader';
import ScoreCard from './ScoreCard';
import PlayAgainBtn from './PlayAgainBtn';

export default function ResultsScreen() {
    return (
        <div className="section">
            <ResultsHeader/>
            <ScoreCard/>
            <PlayAgainBtn/>
        </div>
    );
}