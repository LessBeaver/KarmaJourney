import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="homebg flex-column">
        <Link to="QuizPage" className="">
          <button className="play" type="button">Play now !</button>
        </Link>
      </div>
    );
  }
}

export default Home;