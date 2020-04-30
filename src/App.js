import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import QuizPage from './components/QuizPage';
import Navbar from './components/Navbar';
import './App.css';
import ApiCall2 from './components/ApiCall2'


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <ApiCall2/>
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