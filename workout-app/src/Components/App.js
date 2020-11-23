import React from "react";
import "../Styles/App.css";
import LoadSaveWrap from "./LoadSaveComponent";
import ExerciseWorkspace from "./ExerciseWorkspace";

const mockData = [
  { id: 0, name: "Lying chest press", sets: 5, reps: 5, breakTime: 90 },
  { id: 1, name: "Cable fly", sets: 4, reps: 8, breakTime: 60 },
  { id: 2, name: "Chest dips", sets: 4, reps: 8, breakTime: 60 },
  {
    id: 3,
    name: "Skullcrusher with dumbbells",
    sets: 5,
    reps: 6,
    breakTime: 90,
  },
  { id: 4, name: "Tricep pushdowns", sets: 5, reps: 10, breakTime: 90 },
];

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isWorkspaceEditable: true,
      exerciseItems: mockData,
    };
    
    this.toggleWorkspaceEdit = this.toggleWorkspaceEdit.bind(this);
    this.deleteExerciseItem = this.deleteExerciseItem.bind(this);
    this.addExerciseItem = this.addExerciseItem.bind(this);
    this.updateExerciseItem = this.updateExerciseItem.bind(this);
  }

  toggleWorkspaceEdit(isEditable) {
    this.setState({ isWorkspaceEditable: isEditable });
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
            toggleWorkspaceEdit={this.toggleWorkspaceEdit}
            deleteExerciseItem={this.deleteExerciseItem}
            addExerciseItem={this.addExerciseItem}
            updateExerciseItem={this.updateExerciseItem}
          />
        </div>
      </div>
    );
  }
}

export default App;
