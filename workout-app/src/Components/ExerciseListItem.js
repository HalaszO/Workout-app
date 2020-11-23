import React from "react";

export default class ListItemComponent extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    const id = this.props.exerciseContent.id;
    const name = this.props.exerciseContent.name;
    const sets = this.props.exerciseContent.sets;
    const reps = this.props.exerciseContent.reps;
    const breakTime = this.props.exerciseContent.breakTime;
    const readOnly = !this.props.isWorkspaceEditable;

    return (
      <div className="exercise-list-item-wrap list-item" id={`exercise-list-item-${id}`}>
        <div className="exercise-input-div" id={`exercise-input-${id}`}>
          <input
            className="exercise-input-name exercise-input-text"
            id={`exercise-input-name-${id}`}
            type="text"
            placeholder="Exercise"
            value={name}
            readOnly={readOnly}
          ></input>
          <input
            className="exercise-input-sets exercise-input-numeric"
            id={`exercise-input-sets-${id}`}
            type="text"
            placeholder="No. sets"
            value={sets}
            readOnly={readOnly}
          ></input>
          <input
            className="exercise-input-reps exercise-input-numeric"
            id={`exercise-input-reps-${id}`}
            type="text"
            placeholder="No. reps"
            value={reps}
            readOnly={readOnly}
          ></input>
          <input
            className="exercise-input-break exercise-input-numeric"
            id={`exercise-input-break-${id}`}
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
  const id = props.exerciseContent.id;
  if (props.isWorkspaceEditable) {
    return (
      <button
        className="delete-exercise-btn shown-when-editable"
        id={`delete-btn-${id}`}
      >
        x
      </button>
    );
  } else return; // don't render component when list is not editable
};
