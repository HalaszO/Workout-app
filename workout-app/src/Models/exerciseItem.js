export default function ExerciseItem(
  id = Date.now(), 
  name = "",
  sets = "",
  reps = "",
  breakTime = ""
) {
  this.id = id;
  this.name = name;
  this.sets = sets;
  this.reps = reps;
  this.breakTime = breakTime;
}

// Using Date.now() as unique id for a new exercise (since no new user input is expected under 1 ms)