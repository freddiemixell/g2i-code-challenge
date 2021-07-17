import { cleanup } from '@testing-library/react';

import quizReducer, { initialState } from '../components/QuizProvider/QuizReducer';

// Runs after each test.
afterEach( () => {
  cleanup();
} );

/**
 * Test Functionality of Actions.
 */
describe( 'test the reducer and actions', () => {
  it( 'should return the initial state', () => {
    expect( initialState ).toEqual( { currentQuestion: 0, answers: [], questions: [] } );
  } );

  it('has initial state after reset', () => {
    let mockStateChange = {
      ...initialState,
      currentQuestion: 5,
    }
    expect( quizReducer( mockStateChange, { type: 'RESET_QUIZ' } ))
      .toEqual( initialState )
  } );

  it('increments questions', () => {
    let mockStateChange = {
      ...initialState,
      currentQuestion: 5,
    }
    expect( quizReducer( mockStateChange, { type: 'NEXT_QUESTION' } ) )
      .toEqual( { ...initialState, currentQuestion: 6 } )
  } );

  it('adds answer to answers', () => {
    let mockStateChange = {
      ...initialState,
      currentQuestion: 1,
      answers: [ 'true' ],
    }
    expect( quizReducer( mockStateChange, { type: 'ADD_ANSWER', payload: { answer: 'false' } } ) )
      .toEqual( { ...mockStateChange, answers: ['true', 'false'] } )
  } );

  it('adds questions to state', () => {
    let questions = [
      {which: 'question1'},
      {which: 'question2'}
    ]
    expect( quizReducer( initialState, { type: 'UPDATE_QUESTIONS', payload: { questions } } ) )
      .toEqual( { ...initialState, questions } )
  } );
} );

/**
 * Test Error Messages.
 */
describe( 'test the reducers errors', () => {
  it( 'throws error if questions are included', () => {
    expect( () => { quizReducer( initialState, { type: 'UPDATE_QUESTIONS', payload: {} } ) } )
      .toThrow('Questions not provided to UPDATE_QUESTIONS action.');
  } );

  it( 'throws error if no action type is used', () => {
    expect( () => { quizReducer( initialState, { payload: {} } ) } )
      .toThrow( 'No action type passed to quiz reducer.' );
  } );
} );
