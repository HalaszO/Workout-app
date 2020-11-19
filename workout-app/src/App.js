import React from "react";
import "./App.css";
import ExerciseItem from "./exerciseItem";
import LoadSaveWrap from "./Components/LoadSaveComponent";
import ExerciseWorkspace from "./Components/ExerciseList";

const exerciseArray = [
  { name: "Lying chest press", sets: 5, reps: 5, breakTime: 90 },
  { name: "Cable fly", sets: 4, reps: 8, breakTime: 60 },
  { name: "Chest dips", sets: 4, reps: 8, breakTime: 60 },
  { name: "Skullcrusher with dumbbells", sets: 5, reps: 6, breakTime: 90 },
  { name: "Tricep pushdowns", sets: 5, reps: 10, breakTime: 90 },
];

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isWorkspaceEditable: true,
      exerciseItems: exerciseArray,
    };
  }
  render() {
    return (
      <div className="app-wrap main app">
        <div className="wrap utility-wrap" id="utility-wrap">
          <LoadSaveWrap isWorkspaceEditable={this.state.isWorkspaceEditable} />
        </div>
        <div className="wrap workspace-wrap" id="workspace-wrap">
          <ExerciseWorkspace
            exerciseItems={this.state.exerciseItems}
            isWorkspaceEditable={this.state.isWorkspaceEditable}
          />
        </div>
      </div>
    );
  }
}

export default App;
