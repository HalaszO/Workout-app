export default function ExerciseItem(
    name = "",
    sets = null,
    reps = null,
    breakTime = null
  ) {
    this.name = name;
    this.sets = sets;
    this.reps = reps;
    this.breakTime = breakTime;
  }