import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import QuizScreen from '../components/QuizScreen/QuizScreen';

afterEach( () => {
    cleanup();
} );

describe( 'QuizScreen elements', () => {
    it( 'renders true and false buttons', () => {
        render(
            <Router>
                <QuizScreen />
            </Router>
        );
        const trueBtn = screen.getByText(/True/i);
        const falseBtn = screen.getByText(/False/i);
        expect( trueBtn ).toBeInTheDocument();
        expect( falseBtn ).toBeInTheDocument();
    } );

    it( 'renders current question counter', () => {
        render(
            <Router>
                <QuizScreen />
            </Router>
        );
        const counter = screen.getByText(/1 of 10/i);
        expect( counter ).toBeInTheDocument();
    } );
} );
