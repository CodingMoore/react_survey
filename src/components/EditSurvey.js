import React from 'react';
import ReusableSurveyForm from './ReusableSurveyForm';
import PropTypes from "prop-types";


function EditSurvey() {
  // function handleEditSurveySubmission(event) {
  //   event.preventDefault();
    // onEditSurvey();
    // const propertiesToUpdate = {
    //   question1: event.question1.name.value,
    //   question2: event.question2.name.value,
    //   question3: event.question3.name.value
    // }

    return (
      <React.Fragment>
        <p><i>edit survey.js starts here</i> </p>
          <ReusableSurveyForm
          // formSubmissionHandler={handleEditSurveySubmission}
          buttonText='Update Survey'
        />
        <p><i>edit survey.js ends here</i> </p>
      </React.Fragment>
    )
  }


EditSurvey.propTypes = {
  
}

export default EditSurvey;
