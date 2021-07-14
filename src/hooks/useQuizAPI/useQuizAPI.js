import React, { useState } from 'react';
import fetch from 'unfetch';

const apiUrl = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

export default function useQuizAPI() {
    let [ responseCode, setResponseCode ] = useState(null);
    let [ results, setResults ] = useState([]);

    let getResults = async () => {
        try {
            let req = await fetch(apiUrl);
            let res = await req.json();

            if ( typeof res.results !== 'undefined' ) {
                setResults( res.results );
                setResponseCode( res.response_code );
            } else {
                throw new Error( 'No results from quiz api fetch.' );
            }
        } catch ( error ) {
            console.log( error )
        }
    }

    return {
        responseCode,
        results,
        getResults,
    }
}
