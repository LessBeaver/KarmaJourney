import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="homebg">
        <Link to="QuizPage" className="">
          <h4>Play now</h4>
        </Link>
      </div>
    );
  }
}

export default Home;