import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout/service/workout.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Workout } from '../models/workout';
import { WorkoutHistoryService } from '../workout-history/service/workout-history.service';

@Component({
  selector: 'app-workout-content',
  templateUrl: './workout-content.component.html',
  styleUrls: ['./workout-content.component.css']
})
export class WorkoutContentComponent implements OnInit {

  constructor(private workoutService: WorkoutService, private workoutHistoryService: WorkoutHistoryService, private router: Router, private route: ActivatedRoute) { }

  userid: number = 1;
  workout: any = {};
  checkboxes: number[] = [];
  ready: boolean;

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.workoutService.get(params.workoutid).subscribe((data) => { this.workout = data});
      }
    )
    this.ready = false;
    
  }


  checkbox(index: number){
    if(this.checkboxes.includes(index)){
    this.checkboxes.splice(this.checkboxes.indexOf(index),1);}
    else{this.checkboxes.push(index)}
    this.lengthCheck();
    
  }

  lengthCheck(){
    if(this.workout.exercises.length === this.checkboxes.length){
      this.ready = true;
    } else{ this.ready = false;}
  }

  sentToHistory(){
    this.workoutHistoryService.post(this.workout.id).subscribe(
      () =>{alert('Well done!')}

    )
    this.router.navigateByUrl('/workouts')
  }



}
