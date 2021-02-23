import React from "react";
import PropTypes from "prop-types";

function ReusableSurveyForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
        type='text'
        name='name'
        placeholder='NAME Of THE SURVEY'/>
        <input
        type='text'
        name='description'
        placeholder='SURVEY DESCRIPTION'/>
        <input
        type='text'
        name='q1'
        placeholder='Question 1'/>
        <input
        type='text'
        name='q2'
        placeholder='Question 2'/>
        <input
        type='text'
        name='q3'
        placeholder='Question 3'/>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}


ReusableSurveyForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableSurveyForm;

