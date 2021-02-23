import React from "react";
import Header from "./Header";
import SurveyList from "./SurveyList";
import SurveyControl from "./SurveyControl";

function App(){
  return (
    <React.Fragment>
      <Header />
      <h3>Survey</h3>
      <h3>{name} and {description}</h3>
      <h3>{question1}</h3>
      <h3>{question2}</h3>
      <h3>{question3}</h3>
      <SurveyList />
    </React.Fragment>
  );
}

export default App;