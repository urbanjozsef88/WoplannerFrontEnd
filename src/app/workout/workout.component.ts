import { Component, OnInit } from '@angular/core';
import { WorkoutService } from './service/workout.service';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {

  /* userId: number = 1; */
  listObj: any;


  constructor(private workoutservice: WorkoutService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.workoutservice.getAll(params.userid).subscribe((data) => { this.listObj = data});
      }
    )
    /* this.workoutservice.getAll(this.userId).subscribe(
      (data) => {this.listObj = data;
      console.log(this.listObj);
    }
    ) */

  }

  deleteWorkout(id: number){
    this.workoutservice.deleteWorkout(id).subscribe((data: any) => {
      alert('Workout is deleted!');
      this.workoutservice.getAll(this.userId).subscribe(
        (data) => {this.listObj = data;
        console.log(this.listObj);
      }
      )
    },
    err => alert('Error occured during delete!'));
    
  }

}
