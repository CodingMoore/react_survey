import React from 'react';
import SurveyList from './SurveyList';
import SurveyAnswerForm from "./SurveyAnswerForm";

function Client() {
  return(
    <>
    <div style={{backgroundColor:"#ccffcc"}}>
      <p>Client Block</p>
      <SurveyList />
      <SurveyAnswerForm />
    </div>
    </>
  );
}

export default Client;