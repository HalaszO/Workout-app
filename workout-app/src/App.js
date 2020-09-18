import React from 'react';
import './App.css';

class AppContainer extends React.Component {
  render() {

  }
}

class SaveLoadField extends React.Component {
  render() {

  }
}

class WorkoutList extends React.Component {
  render() {

  }
}

class WorkoutListItem extends React.Component {
  render() {
    const workoutItem = this.props.workoutItem;
    const exercise = workoutItem.exercise;
    const sets = workoutItem.sets;
    const reps = workoutItem.reps;
    const breakTime = workoutItem.breakTime;

    
  }
}

class AddItem extends React.Component {
  render() {

  }
}

const mockData = [
  {exercise: "Lying chest press", sets: 5, reps: 5, breakTime: 90},
  {exercise: "Cable fly", sets: 4, reps: 8, breakTime: 60},
  {exercise: "Chest dips", sets: 4, reps: 8, breakTime: 60},
  {exercise: "Skullcrusher with dumbbells", sets: 5, reps: 6, breakTime: 90},
  {exercise: "Tricep pushdowns", sets: 5, reps: 10, breakTime: 90}
]

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
