import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout/service/workout.service';
import { Exercise } from '../models/exercise';
import { Workout } from '../models/workout';
import {Router} from '@angular/router';


@Component({
  selector: 'app-create-workout',
  templateUrl: './create-workout.component.html',
  styleUrls: ['./create-workout.component.css']
})
export class CreateWorkoutComponent implements OnInit {

  constructor(private workoutService: WorkoutService, private router: Router) { }

  ngOnInit() {
  }


  newExercise={
  name: "",
  sets: 1,
  reps: 1,
  weight: 1,
  type: "KG"
  }

  newWorkout={
    name: "",
    exercises: []
  }

  addExercise(){
    let exer = new Exercise(this.newExercise.name, this.newExercise.sets, this.newExercise.reps, this.newExercise.weight, this.newExercise.type);
    this.newWorkout.exercises.push(exer);
    this.newExercise.name = "";
    this.newExercise.sets = 1;
    this.newExercise.reps = 1;
    this.newExercise.weight = 1;
  }

  deleteExercise(index: number){
    this.newWorkout.exercises.splice(index,1);
  }


  createWorkout(){
    let workout = new Workout(this.newWorkout.name, this.newWorkout.exercises)
    console.log(workout);
    
    this.workoutService.addWorkout(workout).subscribe((data: any) => {
      this.router.navigateByUrl('/workouts');
    },
    err => alert('Error! Please try it again!')
  );
};
    


}


