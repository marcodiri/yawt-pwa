export class Exercise {
  public _id: string;
  public type = "exercise";

  constructor(
    public name: string,
    public recordType: Exercise.RecordType,
    public equipment: Exercise.Equipment,
    public muscle_primary: Exercise.MuscleGroup,
    public muscle_secondary?: Exercise.MuscleGroup[],
  ) {
    this._id = Exercise.build_id(
      this.type,
      this.muscle_primary,
      this.equipment,
      this.name
    );
  }

  static from_obj(obj: Object) {
    if (
      obj.hasOwnProperty("name") &&
      obj.hasOwnProperty("recordType") &&
      obj.hasOwnProperty("equipment") &&
      obj.hasOwnProperty("muscle_primary") &&
      obj.hasOwnProperty("muscle_secondary")
    ) {
      return new this(
        (obj as any).name,
        (obj as any).recordType,
        (obj as any).equipment,
        (obj as any).muscle_primary,
        (obj as any).muscle_secondary
      );
    } else {
      throw new TypeError("obj should have the same properties as Exercise.");
    }
  }

  static build_id(
    type: string,
    muscle_primary: string,
    equipment: string,
    name: string
  ) {
    return (type + "/" +
      muscle_primary + "/" +
      equipment + "/" +
      name).replaceAll(" ", "");
  }
};

export namespace Exercise {
  export enum RecordType {
    WaR = "Weight and Reps",
    Reps = "Reps",
    // Time = "Time",
    // DaT = "Distance and Time",
  }
  export enum MuscleGroup {
    Abs = "Abs",
    Back = "Back",
    Biceps = "Biceps",
    Cardio = "Cardio",
    Chest = "Chest",
    Legs = "Legs",
    Shoulders = "Shoulders",
    Triceps = "Triceps",
  }
  export enum Equipment {
    Barbell = "Barbell",
    Bodyweight = "Bodyweight",
    Cable = "Cable",
    Dumbbell = "Dumbbell",
    Kettlebell = "Kettlebell",
    Machine = "Machine",
    Trapbar = "Trap Bar",
    Treadmill = "Treadmill",
    WeightPlate = "Weight Plate",
    Others = "Others",
  }
}