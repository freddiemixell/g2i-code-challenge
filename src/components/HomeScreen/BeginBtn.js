import React from 'react';
import { Link } from 'react-router-dom';

export default function BeginBtn() {
    return (
        <Link
            className="button"
            to="/quiz"
        >
            Begin
        </Link>
    );
}