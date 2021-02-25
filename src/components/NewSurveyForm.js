import React from "react";
// import PropTypes from "prop-types";
import ReusableSurveyForm from './ReusableSurveyForm';
import { useFirestore } from 'react-redux-firebase'

function NewSurveyForm() {
  const firestore = useFirestore();
  function addSurveyToFirestore(event) {
    console.log(event.target.name.value);
    event.preventDefault();
    // props.onNewSurveyCreation();
    return firestore.collection("surveys").add(
      {
        name: event.target.name.value,
        description: event.target.description.value,
        question1: event.target.question1.value,
        question2: event.target.question2.value,
        question3: event.target.question3.value,
      }
    );
  }

  return (
    <React.Fragment>
      <h3>New Survey Form (begins)</h3>
      <ReusableSurveyForm 
        formSubmissionHandler = {addSurveyToFirestore}
      />
      <h3>New Survey Form (ends)</h3>
    </React.Fragment>
  );
}


export default NewSurveyForm;

