import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const mockData = [
  {name: "Lying chest press", sets: 5, reps: 5, breakTime: 90},
  {name: "Cable fly", sets: 4, reps: 8, breakTime: 60},
  {name: "Chest dips", sets: 4, reps: 8, breakTime: 60},
  {name: "Skullcrusher with dumbbells", sets: 5, reps: 6, breakTime: 90},
  {name: "Tricep pushdowns", sets: 5, reps: 10, breakTime: 90}
]

ReactDOM.render(
  <React.StrictMode>
    <App exerciseItems={mockData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
