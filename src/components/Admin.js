import React from 'react';
import SurveyList from './SurveyList';
import NewSurveyForm from './NewSurveyForm';
import EditSurvey from "./EditSurvey";

class Admin extends React.Component {

  render(){
    return(
      <>
      <div style={{backgroundColor:"#ccccff"}}>
      <h1>Survey Control (begins)</h1>
      <SurveyList />
      <NewSurveyForm />
      <EditSurvey />
      <h1>Survey Control (ends)</h1>
      </div>
      </>
    );
  }

}

export default Admin;