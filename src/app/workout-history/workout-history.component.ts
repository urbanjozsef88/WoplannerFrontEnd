import { Component, OnInit } from '@angular/core';
import { WorkoutHistoryService } from './service/workout-history.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workout-history',
  templateUrl: './workout-history.component.html',
  styleUrls: ['./workout-history.component.css']
})
export class WorkoutHistoryComponent implements OnInit {

  listObj: any;

  constructor(private workoutHistoryService: WorkoutHistoryService, private router: Router) { }

  ngOnInit() {
    this.workoutHistoryService.getAll().subscribe(
      (data) => {this.listObj = data})
  }


  clearhistory(){
    if(confirm('Your workout history will be deleted. Continue?')){
      this.workoutHistoryService.delete().subscribe((data: any) => {
        alert('Workouthistory is cleared!');
    })
    this.workoutHistoryService.getAll().subscribe(
    (data) => {this.listObj = data})
  }
  }
}