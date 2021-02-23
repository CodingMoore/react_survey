import React from "react";
import PropTypes from "prop-types";
import ReuseableSurveyForm from './ReusableSurveyForm';

function NewSurveyForm(props) {
  function handleNewSurveyFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({name: event.target.name.value,
    description: event.target.description.value,
    question1: event.target.question1.value,})
  }
  
  return (
    <React.Fragment>
      <ReuseableSurveyForm />
      {/* // name: event.target.name.value,
      // description: event.description.name.value,
      // question1: event.question1.name.value,
      // question2: event.question1.name.value,
      // question3: event.question1.name.value,
      // question4:
      // question5:  */}
      
      
      <h3></h3>
    </React.Fragment>

  );
}

export default NewSurveyForm;