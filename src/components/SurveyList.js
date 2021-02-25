import React from "react";
import PropTypes from "prop-types";
import Survey from "./Survey";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

// const masterSurveyList = [
//   {
//     name: "Survey 1",
//     description: "A Survey about food",
//     question1: "What is your favorite meat?",
//     question2: "What is your favorite grain?",
//     question3: "What is your favorite dessert?",
//   },
//   {
//     name: "Survey 2",
//     description: "A Survey about animal",
//     question1: "What is your favorite octopus?",
//     question2: "What is your favorite snake?",
//     question3: "What is your favorite horse?",
//     }
// ];


function SurveyList(props) {
useFirestoreConnect([
  { collection: "surveys" }
]);
  const surveys = useSelector(state => state.firestore.ordered.surveys);
  if (isLoaded(surveys)) {
    return (
      <React.Fragment>
        {surveys.map((survey) => 
          <Survey 
          whenSurveyClicked = { props.onSurveySelection }
          name = {survey.name}
          description = {survey.description}
          question1 = {survey.question1}
          question2 = {survey.question2}
          question3 = {survey.question3}
          id={survey.id}
          key = {survey.id}/>
        )}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

SurveyList.propTypes = {
  onSurveySelection: PropTypes.func
};

export default SurveyList;