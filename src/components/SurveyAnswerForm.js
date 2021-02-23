import React from 'react';

function SurveyAnswerForm() {
  // const { survey } = props;
  
  return (
    <React.Fragment>
      <h4>Survey Answer Form (begins here)</h4>
      
      {/* <form onSubmit={props.formsubmissionHandler}> */}
      <form>
        <label>Question 1: </label>
        <br /> 
        <input type='text' 
        name='answer1' 
        placeholder='ANSWER 1'/>
        <br /> 
        <br /> 
      <label>Question 2: </label>
      <br /> 
      <input type='text' 
        name='answer2' 
        placeholder='ANSWER 2'/>
        <br /> 
        <br /> 
      <label>Question 3: </label>
      <br /> 
      <input type='text' 
        name='answer3' 
        placeholder='ANSWER 3'/>
        <br />
        <br />
      <button type='submit'>-- Placeholder Text</button>
      </form>
      <h4>Survey Answer Form (ends here)</h4>
    </React.Fragment>

  )
}

export default SurveyAnswerForm;
