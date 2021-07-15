export const initialState = {
    currentQuestion: 0,
    answers: [],
    questions: [],
};
/**
 * Quiz Reducer
 * @param {Object} state current quiz state.
 * @param {Object} action action and payload for reducer.
 */
export default function quizReducer( state, action ) {
    switch ( action.type ) {
        case 'RESET_QUIZ':
            return {
                ...initialState
            };

        case 'NEXT_QUESTION':
            return {
                ...state,
                currentQuestion: currentQuestion + 1,
            };

        case 'ADD_ANSWER':
            if ( typeof action.payload === 'undefined' || typeof action.payload.answer === 'undefined' ) {
                throw new Error( 'Answer not provided to ADD_ANSWER action.' );
            }
            return {
                ...state,
                answers: [
                    ...answers,
                    action.payload.answer,
                ],
            }

        case 'UPDATE_QUESTION':
            if ( typeof action.payload === 'undefined' || typeof action.payload.questions === 'undefined' ) {
                throw new Error( 'Questions not provided to UPDATE_QUESTION action.' );
            }
            return {
                ...state,
                questions: [
                    ...action.payload.questions,
                ],
            };

        default:
            throw new Error( 'No action type passed to quiz reducer.' );
    }
}
