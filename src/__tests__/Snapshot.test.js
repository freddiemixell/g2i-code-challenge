import React from "react";
import Enzyme, { shallow, } from "enzyme";
import toJson from 'enzyme-to-json';
import Adapter from "enzyme-adapter-react-16";

import HomeScreen from '../components/HomeScreen/HomeScreen';
import QuizScreen from '../components/QuizScreen/QuizScreen';
import ResultsScreen from '../components/ResultsScreen/ResultsScreen';


Enzyme.configure( { adapter: new Adapter() } );

describe( 'Snapshots', () => {
    it( "renders correctly", () => {
        const home = shallow( <HomeScreen /> );
        const quiz = shallow( <QuizScreen/> );
        const results = shallow( <ResultsScreen/> );

        expect( toJson( home ) ).toMatchSnapshot();
        expect( toJson( quiz ) ).toMatchSnapshot();
        expect( toJson( results ) ).toMatchSnapshot();
    } );
} );
