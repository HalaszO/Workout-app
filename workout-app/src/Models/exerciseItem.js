export default function ExerciseItem(
    id = Date.now(), // Use Date.now() as a unique id for exercises (no new user input is expected under 1 ms)
    name = "",
    sets = null,
    reps = null,
    breakTime = null
  ) {
    this.id = id;
    this.name = name;
    this.sets = sets;
    this.reps = reps;
    this.breakTime = breakTime;
  }