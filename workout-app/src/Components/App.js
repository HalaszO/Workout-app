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
  constructor() {
    super();
    this.state = {
      isWorkspaceEditable: true,
      exerciseItems: mockData,
    };
    this.toggleWorkspaceEdit = this.toggleWorkspaceEdit.bind(this);
  }

  toggleWorkspaceEdit(isEditable) {
    this.setState({ isWorkspaceEditable: isEditable });
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
          />
        </div>
      </div>
    );
  }
}

export default App;
