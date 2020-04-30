import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import QuizPage from './components/QuizPage'
import './App.css';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/QuizPage" exact component={QuizPage} />
          {/* <Route path="/Contact" exact component={FinalPage} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;