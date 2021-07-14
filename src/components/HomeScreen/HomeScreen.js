import React from 'react';
import BeginBtn from './BeginBtn';
import HomeHeader from './HomeHeader';

export default function HomeScreen() {
    return (
        <div className="section">
            <HomeHeader/>
            <BeginBtn/>
        </div>
    );
}