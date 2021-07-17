import { useCallback, useState } from 'react';
import fetch from 'unfetch';

const apiUrl = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

export default function useQuizAPI() {
    let [ isLoading, setIsLoading ] = useState( true );

    let getResults = useCallback( async () => {
        try {
            setIsLoading( true );
            let req = await fetch(apiUrl);
            let res = await req.json();

            if ( typeof res.results !== 'undefined' ) {
                // Pause for dramatic effect!
                setTimeout( () => {
                    setIsLoading( false );  
                }, 1000 );
                return res.results;
            } else {
                setIsLoading( false );
                throw new Error( 'No results from quiz api fetch.' );
            }
        } catch ( error ) {
            console.log( error );
            setIsLoading( false );
        }
    }, [] );

    return {
        getResults, isLoading,
    }
}
