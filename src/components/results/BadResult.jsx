import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import Popup from '../popup/Popup';

class BadResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
    }
  }

  render() {
    return (
      <CSSTransitionGroup
        className="container result"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}
      >
        <div>
          You prefer <strong>{props.quizResult}</strong>!
        </div>
        <Popup />
      </CSSTransitionGroup>
    );  
  }
}

BadResult.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default BadResult;