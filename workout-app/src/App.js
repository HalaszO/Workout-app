import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return(
      <div>
        <SaveLoadField />
        <ExerciseListContainer exerciseItems={this.props.exerciseItems}/>
      </div>
    );
  }
}



class ExerciseListContainer extends React.Component {
  render() {
    return(
      <div>
        <ExerciseList exerciseItems={this.props.exerciseItems}/>
        <AddItem isEditActive={this.props.isEditActive}/>
        <FinishEditingBtn isEditActive={this.props.isEditActive}/>
      </div>
    );
  }
}

class ExerciseList extends React.Component {
  render() {
    const listItems = this.props.exerciseItems.map((exerciseItem, index) =>
      <ExerciseListItem key={index} exerciseItem={exerciseItem}/>);
    return(
      <ul>
         {listItems}
      </ul>
    );
  }
}

class ExerciseListItem extends React.Component {
  render() {
    const exerciseItem = this.props.exerciseItem;
    return(
      <li className='list-item' key={this.props.key}>
        <div className='exercise-item'>
          {exerciseItem.name}, 
          {exerciseItem.sets} sets, 
          {exerciseItem.reps} reps, 
          {exerciseItem.breakTime} sec break
        </div>
        <DeleteItemBtn />
      </li>
    );
    
  }
}

class FinishEditingBtn extends React.Component {
  render() {
    let className = 'finish-editing-btn'
    if(this.props.isEditActive) {
      className += ' edit-active';
    }
    return(
      <button className={className}>Finish editing</button>
    );
  }
}

class DeleteItemBtn extends React.Component {
  render() {
    return (
      <button>x</button>
    )
  }
}

class SaveLoadField extends React.Component {
  render() {
    return(
      <div id='save-load-div'>
        <button type='submit' className='save-btn'>Save workout</button>
        <button type='submit' className='load-btn'>Load workout</button>
      </div>
    );
  }
}

class AddItem extends React.Component {
  render() {
    return(
      <button className='add-btn'>+</button>
    );
  }
}

export const mockData = [
  {name: "Lying chest press", sets: 5, reps: 5, breakTime: 90},
  {name: "Cable fly", sets: 4, reps: 8, breakTime: 60},
  {name: "Chest dips", sets: 4, reps: 8, breakTime: 60},
  {name: "Skullcrusher with dumbbells", sets: 5, reps: 6, breakTime: 90},
  {name: "Tricep pushdowns", sets: 5, reps: 10, breakTime: 90}
]

export default App;
