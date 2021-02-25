import React from "react";
import PropTypes from 'prop-types';

function Survey(props){

  return (
    <React.Fragment>
      <p>(Survey.js begins here)</p>
      <div onClick = {() => props.whenSurveyClicked(props.id)}>
        <h3>{props.name}</h3>
        <h4>{props.description}</h4>
        <h5>{props.question1}</h5>
        <h5>{props.question2}</h5>
        <h5>{props.question3}</h5>
        <hr/>
      </div>
      <p>(Survey.js ends here)</p>
    </React.Fragment>
  );
}

Survey.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  question1: PropTypes.string.isRequired,
  question2: PropTypes.string.isRequired,
  question3: PropTypes.string.isRequired,
  whenSurveyisClicked: PropTypes.func
};

export default Survey;