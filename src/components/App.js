import React from "react";
import Header from "./Header";
// import SurveyList from "./SurveyList";
// import Admin from "./Admin";
import Admin from './Admin';
import Client from './Client';

function App(){
  return (
    <React.Fragment>
      <p>Main App!!</p>
      <Header />
      {/* <h3>Survey</h3>
      <h3>{name} and {description}</h3>
      <h3>{question1}</h3>
      <h3>{question2}</h3>
      <h3>{question3}</h3> */}
      {/* <Admin /> */}
      <Admin />
      <Client />
    </React.Fragment>
  );
}

export default App;