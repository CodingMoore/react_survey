import React from 'react';
import SurveyList from './SurveyList';
import AnswerSurvey from "./AnswerSurvey";
import { connect } from 'react-redux';
import { withFirestore } from "react-redux-firebase";

class Client extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedSurvey: {
        name: "name",
        description: "description",
        question1: "question1",
        question2: "question2",
        question3: "question3"
      }

    }
  }

  handleChangingSelectedSurvey = (id) => {
    this.props.firestore.get({collection: "surveys", doc: id}).then((survey) => {
      const firestoreSurvey = {
        name: survey.get("name"),
        description: survey.get("description"),
        question1: survey.get("question1"),
        question2: survey.get("question2"),
        question3: survey.get("question3"),
        id: survey.id
      }
      this.setState({ selectedSurvey: firestoreSurvey });
    });
  }

  render() {
    return(
      <>
      <div style={{backgroundColor:"#ccffcc"}}>
        <p>Client Block</p>
        <SurveyList 
        onSurveySelection = {this.handleChangingSelectedSurvey}/>;
        <AnswerSurvey 
        survey = {this.state.selectedSurvey}/>
      </div>
      </>
    );
  }
}



export default withFirestore(Client);