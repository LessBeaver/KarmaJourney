import React, { Component } from "react";
import Quiz from "../components/Quiz"
import quizQuestions from "../api/quizQuestions";
import Result from "./results/Result";
import "./QuizPage.css";
import ApiCall1 from './ApiCall1';
import ApiCall2 from './ApiCall2';

class QuizPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: "",
      answerOptions: [],
      answer: "",
      answersCount: {},
      result: "",
      badResult: false,
      goodResult: false,
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    const shuffledAnswerOptions = quizQuestions.map((question) =>
      this.shuffleArray(question.answers)
    );
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0],
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {      array[randomIndex] = temporaryValue;
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1,
      },
      answer: answer,
    }));
  }
  
  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: "",
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(
      (key) => answersCount[key] === maxAnswerCount
    );
  }

  setResults(result) {
    if (result.length === 1) {
      if(result[0] === 'Pos') {
        this.setState({ 
          result: result[0],
          goodResult: true,
          badResult: false,
          });
      } else if (result[0] === 'Positive') {
          this.setState({ 
          result: result[0],
          goodResult: true,
          badResult: false,
          });
      } else if (result[0] === 'Neg') {
        this.setState({
          result: result[0],
          badResult: true,
          goodResult: false,
          });
      } else if (result[0] === 'Negative') {
        this.setState({
          result: result[0],
          badResult: true,
          goodResult: false,
        });
      } 
    }  else {
      this.setState({ 
        result: "Undetermined", 
        goodResult: true,
        badResult: false,
      });
    }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    const { badResult } = this.props;
    return <Result 
          quizResult={this.state.result ===  badResult ? 
          <ApiCall2 />
          :
          <ApiCall1 /> 
          } 
          />;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default QuizPage;
