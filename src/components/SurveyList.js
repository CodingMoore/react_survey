import React from "react";
import Survey from "./Survey";

const masterSurveyList = [
  {
    name: "Survey 1",
    description: "A Survey about food",
    question1: "What is your favorite meat?",
    question2: "What is your favorite grain?",
    question3: "What is your favorite dessert?",
    question4: "What is your favorite vegetable?",
    question5: "What is your favorite fruit?"
  },
  {
    name: "Survey 2",
    description: "A Survey about animal",
    question1: "What is your favorite octopus?",
    question2: "What is your favorite snake",
    question3: "What is your favorite horse?",
    question4: "What is your favorite cat?",
    question5: "What is your favorite dog?"
    }
]


function SurveyList() {
  return (
    <React.Fragment>
      {masterTicketList.map((survey, index) => 
        <Survey 
        name = {survey.name}
        description = {survey.description}
        question1 = {survey.question1}
        question2 = {survey.question2}
        question3 = {survey.question3}
        question4 = {survey.question4}
        question5 = {survey.question5}/>
      )}
    </React.Fragment>
  );
}

export default SurveyList;