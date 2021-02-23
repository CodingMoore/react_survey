import React from 'react';
// import SurveyList from './SurveyList';
// import NewSurveyForm from './NewSurveyForm';
// import Edit Survey from wherever that will be, when we get there
// maybe all this will just be import Survey Control. That probably makes more sense.
import SurveyControl from './SurveyControl';

function Admin() {
  return(
    <>
    <div style={{backgroundColor:"#ccccff"}}>
      <p>Admin block</p>
      <SurveyControl />
    </div>
    </>
  );
}

export default Admin;