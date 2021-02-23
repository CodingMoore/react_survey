import React from "react";
import PropTypes from "prop-types";
import ReusableSurveyForm from './ReusableSurveyForm';

function NewSurveyForm(props) {
  function handleSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({
      name: event.target.name.value,
      description: event.target.description.value,
      question1: event.target.question1.value,
      question2: event.target.question2.value,
      question3: event.target.question3.value,})
  }
  
  return (
    <React.Fragment>
      <h3>New Survey Form (begins)</h3>
      <ReusableSurveyForm />
      {/* // name: event.target.name.value,
      // description: event.description.name.value,
      // question1: event.question1.name.value,
      // question2: event.question1.name.value,
      // question3: event.question1.name.value,}
      // question5:  */}
      
      
      <h3>New Survey Form (ends)</h3>
    </React.Fragment>

  );
}

export default NewSurveyForm;

