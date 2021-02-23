import React from 'react';
import SurveyList from './SurveyList';
import NewSurveyForm from './NewSurveyForm';

class SurveyControl extends React.Component {

  render(){
    return(
      <>
      <h1>Survey Control (begins)</h1>
      <SurveyList />
      <NewSurveyForm />
      <h1>Survey Control (ends)</h1>
      </>
    );
  }

}

export default SurveyControl;