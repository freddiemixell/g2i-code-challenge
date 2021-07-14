import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomeScreen from './components/HomeScreen/HomeScreen';
import QuizScreen from './components/QuizScreen/QuizScreen';
import ResultsScreen from './components/ResultsScreen/ResultsScreen';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/results">
            <ResultsScreen />
          </Route>
          <Route path="/quiz">
            <QuizScreen />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
