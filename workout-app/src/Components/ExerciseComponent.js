import ExerciseItem from "../Models/exerciseItem";
import React from "react";

export default class ExerciseComponent extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    const name = this.props.exerciseContent.name;
    const sets = this.props.exerciseContent.sets;
    const reps = this.props.exerciseContent.reps;
    const breakTime = this.props.exerciseContent.breakTime;
    const readOnly = !this.props.isWorkspaceEditable;

    return (
      <div className="exercise-component-wrap list-item">
        <div className="exercise-input-div">
          <input
            className="exercise-input-name"
            type="text"
            placeholder="Exercise"
            value={name}
            readOnly={readOnly}
          ></input>
          <input
            className="exercise-input-set"
            type="text"
            placeholder="No. sets"
            value={sets}
            readOnly={readOnly}
          ></input>
          <input
            className="exercise-input-reps"
            type="text"
            placeholder="No. reps"
            value={reps}
            readOnly={readOnly}
          ></input>
          <input
            className="exercise-input-break"
            type="text"
            placeholder="Break"
            value={breakTime}
            readOnly={readOnly}
          ></input>
          {DeleteExerciseBtn(this.props)}
        </div>
      </div>
    );
  }
}

const DeleteExerciseBtn = (props) => {
  if (props.isWorkspaceEditable) {
    return (
      <button className="delete-exercise-btn shown-when-editable">x</button>
    );
  } else return; // don't render when not list is not editable
};
