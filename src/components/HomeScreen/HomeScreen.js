import React from 'react';
import BeginBtn from './BeginBtn';
import HomeHeader from './HomeHeader';

import { Wrapper } from '../../utils/elements';

export default function HomeScreen() {
    return (
        <Wrapper>
            <HomeHeader/>
            <BeginBtn/>
        </Wrapper>
    );
}