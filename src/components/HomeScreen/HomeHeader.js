import React from 'react';

import { Title, Container } from '../../utils/elements';

export default function HomeHeader() {
    return (
        <>
            <Container>
                <Title>Welcome to the Trivia Challenge!</Title>
            </Container>
            <Container>
                <p>You will be presented with 10 true or false questions.</p>
            </Container>
            <Container>
                <p>Can you score 100%?</p>
            </Container>
        </>
    );
}