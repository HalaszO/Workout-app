import ExerciseComponent, { ExerciseItem } from "./ExerciseComponent";
import { WorkoutName, ExerciseListBar } from "./ExerciseHeaders";
import React from "react";

class ExerciseList extends React.Component {
  constructor(props) {
    super();
  }
  /*toggleEditable = (editable) => {
    this.setState({ isWorkspaceEditable: editable });
  };
  addNewExercise = () => {
    this.setState({ exercises: this.state.exercises.push(new ExerciseItem()) });
  };*/
  render() {
    const isWorkspaceEditable = this.props.isWorkspaceEditable;
    const exerciseItems = this.props.exerciseItems;
    const exerciseComponents = exerciseItems.map((exercise) => {
      return (
        <ExerciseComponent
          exerciseContent={exercise}
          isWorkspaceEditable={this.props.isWorkspaceEditable}
        />
      ); // key needed
    });
    const newExerciseButton = (() => {
      if (isWorkspaceEditable) {
        return (
          <button
            className="new-exercise-btn"
            //onClick={() => this.addNewExercise()}
          >
            +
          </button>
        );
      } else return;
    })();
    return (
      <div className="wrap exercise-list-wrap">
        {exerciseComponents}
        {newExerciseButton}
      </div>
    );
  }
}

class ToggleEditButton extends React.Component {
  render() {
    const isWorkspaceEditable = this.props.isWorkspaceEditable;
    const renderButton = () => {
      if (isWorkspaceEditable) {
        return (
          <button
            className="edit-btn"
            id="disable-edit-btn"
            //onClick={() => this.props.toggleWsEditable(false)}
          >
            Done
          </button>
        );
      } else {
        return (
          <button
            className="edit-btn"
            id="enable-edit-btn"
            //onClick={() => this.props.toggleWsEditable(true)}
          >
            Edit
          </button>
        );
      }
    };
    return <div className="edit-btn-wrap">{renderButton()}</div>;
  }
}

export default class ExerciseWorkspace extends React.Component {
  render() {
    return (
      <div
        className="exercise-workspace workspace workspace-wrap"
        id="exercise-workspace"
      >
        <WorkoutName isWorkspaceEditable={this.props.isWorkspaceEditable} />
        <ExerciseListBar />
        <ExerciseList
          exerciseItems={this.props.exerciseItems}
          isWorkspaceEditable={this.props.isWorkspaceEditable}
        />
        <ToggleEditButton /*toggleWsEditable={this.props.toggleWsEditable}*/ />
      </div>
    );
  }
}
