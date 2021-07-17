import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import ResultsScreen from '../components/ResultsScreen/ResultsScreen';

afterEach( () => {
    cleanup();
} );

describe( 'ResultsScreen testing for elements', () => {
    it( 'check for score', () => {
        render(
            <Router>
                <ResultsScreen />
            </Router>
        );
        const scoreText = screen.getByText(/You scored/i);
        expect( scoreText ).toBeInTheDocument();
    } );
} );