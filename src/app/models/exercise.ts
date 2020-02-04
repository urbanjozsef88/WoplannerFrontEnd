export class Exercise {

  name: string;
  sets: number;
  reps: number;
  weight: number;
  type: any;

  constructor(name: string, sets:number, reps: number, weight: number, type: any) {
    this.name = name;
    this.sets = sets;
    this.reps = reps;
    this.weight = weight;
    this.type = type;
     }

  
}
