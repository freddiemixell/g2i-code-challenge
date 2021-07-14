import React from 'react';

import ScoreCardItem from './ScoreCardItem';

export default function ScoreCard() {
    return (
        <div className="container">
            <ScoreCardItem/>
            <ScoreCardItem/>
            <ScoreCardItem/>
            <ScoreCardItem/>
        </div>
    );
}