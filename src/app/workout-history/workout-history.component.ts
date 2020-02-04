import { Component, OnInit } from '@angular/core';
import { WorkoutHistoryService } from './service/workout-history.service';

@Component({
  selector: 'app-workout-history',
  templateUrl: './workout-history.component.html',
  styleUrls: ['./workout-history.component.css']
})
export class WorkoutHistoryComponent implements OnInit {


  userid: number = 1;
  listObj: any;

  constructor(private workoutHistoryService: WorkoutHistoryService) { }

  ngOnInit() {
    this.workoutHistoryService.getAll(this.userid).subscribe(
      (data) => {this.listObj = data})
  }


  clearhistory(){
    if(confirm('Your workout history will be deleted. Continue?')){
      console.log('fuck')
    }

  }

  }


