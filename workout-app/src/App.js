import React from "react";
import "./App.css";
import ExerciseItem from "./exerciseItem";

const exerciseArray = [
  { name: "Lying chest press", sets: 5, reps: 5, breakTime: 90 },
  { name: "Cable fly", sets: 4, reps: 8, breakTime: 60 },
  { name: "Chest dips", sets: 4, reps: 8, breakTime: 60 },
  { name: "Skullcrusher with dumbbells", sets: 5, reps: 6, breakTime: 90 },
  { name: "Tricep pushdowns", sets: 5, reps: 10, breakTime: 90 },
];

class App extends React.Component {
  render() {
    return (
      <div>
        <SaveLoadField />
        <ExerciseListContainer exerciseItems={exerciseArray} />
      </div>
    );
  }
}

class ExerciseListContainer extends React.Component {
  render() {
    return (
      <div>
        <ExerciseList exerciseItems={this.props.exerciseItems} />
        <AddItem isEditActive={this.props.isEditActive} />
        <FinishEditingBtn isEditActive={this.props.isEditActive} />
      </div>
    );
  }
}

class ExerciseList extends React.Component {
  render() {
    const listItems = this.props.exerciseItems.map((exerciseItem, index) => (
      <ExerciseListItem key={index} exerciseItem={exerciseItem} />
    ));
    return <ul>{listItems}</ul>;
  }
}

class ExerciseListItem extends React.Component {
  render() {
    const exerciseItem = this.props.exerciseItem;
    return (
      <li className="ex-list-item" key={this.props.key}>
        {exerciseItem.name},{exerciseItem.sets} sets,
        {exerciseItem.reps} reps,
        {exerciseItem.breakTime} sec break
        <DeleteItemBtn />
      </li>
    );
  }
}

class FinishEditingBtn extends React.Component {
  render() {
    let className = "finish-editing-btn";
    if (this.props.isEditActive) {
      className += " edit-active";
    }
    return <button className={className}>Finish editing</button>;
  }
}

class DeleteItemBtn extends React.Component {
  render() {
    return <button>x</button>;
  }
}

class SaveLoadField extends React.Component {
  render() {
    return (
      <div id="save-load-div">
        <button type="submit" className="save-btn">
          Save workout
        </button>
        <button type="submit" className="load-btn">
          Load workout
        </button>
      </div>
    );
  }
}

class AddItem extends React.Component {
  render() {
    return <button className="add-btn">+</button>;
  }
}

class ExerciseInput extends React.Component {
  render() {
    return (
      <div className="ex-input-div">
        <form className="ex-input-form">
          <input className="ex-input-name" type="text" placeholder="Exercise"></input>
          <input className="ex-input-sets" type="text" placeholder="No. sets"></input>
          <input className="ex-input-reps" type="text" placeholder="No. reps"></input>
          <input className="ex-input-break" type="text" placeholder="Sec of break"></input>
        </form>
      </div>
    )
  }
}

export default App;
