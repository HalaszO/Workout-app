import React from "react";

export class WorkoutName extends React.Component {
  constructor(props) {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.updateWorkoutName(event.target.value);
  }
  
  render() {
    const name = this.props.workoutName;
    const readOnly = !this.props.isWorkspaceEditable;
    return (
      <div className="workout-name-wrap">
        <input
          className="workout-title workout-name"
          id="workout-name"
          placeholder="Workout name"
          value={name}
          readOnly={readOnly}
          onChange={this.handleChange}
        ></input>
      </div>
    );
  }
}

export class ExerciseListBar extends React.Component {
  render() {
    return (
      <div className="exercise-list-bar bar workout-bar">
        <div
          className="workout-bar-elem exercise-table-name"
          id="workout-bar-name"
        >
          Exercise name
        </div>
        <div
          className="workout-bar-elem exercise-table-sets"
          id="workout-bar-sets"
        >
          Sets
        </div>
        <div
          className="workout-bar-elem exercise-table-reps"
          id="workout-bar-reps"
        >
          Reps
        </div>
        <div
          className="workout-bar-elem exercise-table-break"
          id="workout-bar-break"
        >
          Break (s)
        </div>
      </div>
    );
  }
}
