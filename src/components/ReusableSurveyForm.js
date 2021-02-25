import React from "react";
import PropTypes from "prop-types";

function ReusableSurveyForm(props) {
  return (
    <React.Fragment>
      <h4>Reusable Survey Form (begins here)</h4>
      <form onSubmit={props.formSubmissionHandler}>
        <input
        type='text'
        name='name'
        placeholder='NAME Of THE SURVEY'/>
        <br />
        <input
        type='text'
        name='description'
        placeholder='SURVEY DESCRIPTION'/>
        <br />
        <input
        type='text'
        name='question1'
        placeholder='Question 1'/>
        <br />
        <input
        type='text'
        name='question2'
        placeholder='Question 2'/>
        <br />
        <input
        type='text'
        name='question3'
        placeholder='Question 3'/>
        <br />
        <button type='submit'>Submit Form</button>
      </form>
      <h4>Reusable Survey Form (ends here)</h4>
    </React.Fragment>
  );
}


ReusableSurveyForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
};

export default ReusableSurveyForm;

