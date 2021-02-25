import React from 'react';
import PropTypes from 'prop-types';
import AnswerForm from "./AnswerForm";
import { useFirestore } from 'react-redux-firebase';

function AnswerSurvey(props) {
  const { survey } = props;
  const firestore = useFirestore(); 

  function addAnswerToFirestore(event) {
    event.preventDefault();
    return firestore.collection("answers").add (
      {
        answer1: event.target.answer1.value,
        answer2: event.target.answer2.value,
        answer3: event.target.answer3.value,
      }
    )
  }
  
  return (
    <React.Fragment>
      <h4>Survey Answer(begins here)</h4>
      <AnswerForm
      formSubmissionHandler = {addAnswerToFirestore}
      survey = {survey}
      />
      <h4>Survey Answer(ends here)</h4>
    </React.Fragment>
  );
}

AnswerSurvey.propTypes = {
  survey: PropTypes.object
}

export default AnswerSurvey;


