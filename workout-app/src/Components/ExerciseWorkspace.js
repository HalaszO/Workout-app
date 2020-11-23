import ListItemComponent from "./ExerciseListItem";
import { WorkoutName, ExerciseListBar } from "./ExerciseHeaders";
import React from "react";

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
        <ToggleEditButton
          isWorkspaceEditable={this.props.isWorkspaceEditable}
          toggleWorkspaceEdit={this.props.toggleWorkspaceEdit}
        />
      </div>
    );
  }
}

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
    const listItemComponents = exerciseItems.map((exercise) => {
      return (
        <ListItemComponent
          key={exercise.id}
          exerciseContent={exercise}
          isWorkspaceEditable={isWorkspaceEditable}
        />
      );
    });

    return (
      <div className="wrap exercise-list-wrap">
        {listItemComponents}
        {NewExerciseButton(this.props)}
      </div>
    );
  }
}

const NewExerciseButton = (props) => {
  const isWorkspaceEditable = props.isWorkspaceEditable;
  if (isWorkspaceEditable) {
    return (
      <button
        className="new-exercise-btn"
        //onClick={() => this.addNewExercise()}
      >
        +
      </button>
    );
  }
};

class ToggleEditButton extends React.Component {
  render() {
    const isWorkspaceEditable = this.props.isWorkspaceEditable;
    const renderButton = () => {
      if (isWorkspaceEditable) {
        return (
          <button
            className="edit-btn"
            id="disable-edit-btn"
            onClick={() => this.props.toggleWorkspaceEdit(false)}
          >
            Finish editing
          </button>
        );
      } else {
        return (
          <button
            className="edit-btn"
            id="enable-edit-btn"
            onClick={() => this.props.toggleWorkspaceEdit(true)}
          >
            Edit
          </button>
        );
      }
    };
    return <div className="edit-btn-wrap">{renderButton()}</div>;
  }
}

