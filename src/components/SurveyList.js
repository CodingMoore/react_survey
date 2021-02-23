import React from "react";
import Survey from "./Survey";

const masterSurveyList = [
  {
    name: "Survey 1",
    description: "A Survey about food",
    question1: "What is your favorite meat?",
    question2: "What is your favorite grain?",
    question3: "What is your favorite dessert?",
  },
  {
    name: "Survey 2",
    description: "A Survey about animal",
    question1: "What is your favorite octopus?",
    question2: "What is your favorite snake?",
    question3: "What is your favorite horse?",
    }
];


function SurveyList() {
  return (
    <React.Fragment>
      {masterSurveyList.map((survey, index) => 
        <Survey 
        name = {survey.name}
        description = {survey.description}
        question1 = {survey.question1}
        question2 = {survey.question2}
        question3 = {survey.question3}

        key = {index}/>
      )}
    </React.Fragment>
  );
}

export default SurveyList;