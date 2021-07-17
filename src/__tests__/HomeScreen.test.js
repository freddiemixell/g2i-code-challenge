import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from "@testing-library/user-event";

import HomeScreen from '../components/HomeScreen/HomeScreen';

test('renders button to begin quiz', () => {
    render(
        <Router>
            <HomeScreen />
        </Router>
    );
    const beginBtn = screen.getByText(/Begin/i);
    expect( beginBtn ).toBeInTheDocument();
} );
