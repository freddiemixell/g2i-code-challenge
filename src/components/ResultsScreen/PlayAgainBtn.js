import React from 'react';

import { Container, Link } from '../../utils/elements';

export default function PlayAgainBtn() {
    return (
        <Container>
            <Link
                className="button button__playagain"
                to="/"
            >
                Play Again?
            </Link>
        </Container>
    );
}