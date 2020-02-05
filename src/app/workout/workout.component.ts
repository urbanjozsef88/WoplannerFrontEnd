import { Component, OnInit } from '@angular/core';
import { WorkoutService } from './service/workout.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { UserstateService } from '../userstate.service';


@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {

  userId: number = 1;
  listObj: any;


  constructor(private workoutservice: WorkoutService, private router: Router, private route: ActivatedRoute, private userState: UserstateService) { }

  ngOnInit() {
    this.workoutservice.getAll(this.userState.getUser()).subscribe((data) => { this.listObj = data});
    /* this.workoutservice.getAll(this.userId).subscribe(
      (data) => {this.listObj = data;
      console.log(this.listObj);
    }
    ) */
  }

  deleteWorkout(id: number){
    this.workoutservice.deleteWorkout(id).subscribe((data: any) => {
      alert('Workout is deleted!');
      this.workoutservice.getAll(this.userState.getUser()).subscribe(
        (data) => {this.listObj = data;
        console.log(this.listObj);
      }
      )
    },
    err => alert('Error occured during delete!'));
    
  }

}
