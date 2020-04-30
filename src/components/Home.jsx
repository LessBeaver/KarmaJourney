import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="homebg">
        <div className="title">
          <h2>Find out which trip your karma has in store for you...</h2>
        </div>
        <div className="Link">
          <Link to="QuizPage">
            <button className="btn-grad" type="button">Play now !</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;