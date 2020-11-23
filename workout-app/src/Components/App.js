import React from "react";
import "../Styles/App.css";
import LoadSaveWrap from "./LoadSaveComponent";
import ExerciseWorkspace from "./ExerciseWorkspace";
import mockData from "../mockData";

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isWorkspaceEditable: true,
      exerciseItems: mockData.mockArray,
      workoutName: mockData.mockName,
    };

    this.toggleWorkspaceEdit = this.toggleWorkspaceEdit.bind(this);
    this.updateWorkoutName = this.updateWorkoutName.bind(this);
    this.deleteExerciseItem = this.deleteExerciseItem.bind(this);
    this.addExerciseItem = this.addExerciseItem.bind(this);
    this.updateExerciseItem = this.updateExerciseItem.bind(this);
  }

  toggleWorkspaceEdit(isEditable) {
    this.setState({ isWorkspaceEditable: isEditable });
  }

  updateWorkoutName(name) {
    this.setState({ workoutName: name });
  }

  updateExerciseItem(exerciseItem) {
    const id = exerciseItem.id;
    const indexInArray = this.state.exerciseItems.findIndex(
      (exercise) => exercise.id === id
    );
    this.setState(function callback(state) {
      const updatedItemList = [...state.exerciseItems];
      updatedItemList[indexInArray] = exerciseItem;
      return {
        exerciseItems: updatedItemList,
      };
    });
  }

  addExerciseItem(exerciseItem) {
    this.setState((state) => ({
      exerciseItems: [...state.exerciseItems, exerciseItem],
    }));
  }

  deleteExerciseItem(id) {
    const exerciseItems = this.state.exerciseItems;
    const filteredExercises = exerciseItems.filter(
      (exercise) => exercise.id !== id
    );
    this.setState({ exerciseItems: filteredExercises });
  }

  render() {
    return (
      <div className="app-wrap main app">
        <div className="main-header">Workout creator</div>
        <div className="content-wrap">
          <LoadSaveWrap isWorkspaceEditable={this.state.isWorkspaceEditable} />
          <ExerciseWorkspace
            exerciseItems={this.state.exerciseItems}
            isWorkspaceEditable={this.state.isWorkspaceEditable}
            workoutName={this.state.workoutName}
            toggleWorkspaceEdit={this.toggleWorkspaceEdit}
            deleteExerciseItem={this.deleteExerciseItem}
            addExerciseItem={this.addExerciseItem}
            updateExerciseItem={this.updateExerciseItem}
            updateWorkoutName={this.updateWorkoutName}
          />
        </div>
      </div>
    );
  }
}
