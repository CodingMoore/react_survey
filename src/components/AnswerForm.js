import React from 'react';
import PropTypes from 'prop-types';

function AnswerForm(props) {
  const { survey } = props;
  return (
    <React.Fragment>
      <h4>Survey Answer Form (begins here)</h4>
      <form onSubmit={props.formSubmissionHandler}>
        <label>Question 1: {survey.question1}</label>
        <br /> 
        <input type='text' 
        name='answer1' 
        placeholder='ANSWER 1'/>
        <br /> 
        <br /> 
      <label>Question 2: {survey.question2}</label>
      <br /> 
      <input type='text' 
        name='answer2' 
        placeholder='ANSWER 2'/>
        <br /> 
        <br /> 
      <label>Question 3: {survey.question3}</label>
      <br /> 
      <input type='text' 
        name='answer3' 
        placeholder='ANSWER 3'/>
        <br />
        <br />
      <button type='submit'>Submit Answers</button>
      </form>
      <h4>Survey Answer Form (ends here)</h4>
    </React.Fragment>
  );
}

AnswerForm.propTypes = {
  survey: PropTypes.object,
  formSubmissionHandler: PropTypes.func
}

export default AnswerForm;