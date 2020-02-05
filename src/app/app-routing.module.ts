import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component'
import { WorkoutComponent } from './workout/workout.component'
import { WorkoutHistoryComponent } from './workout-history/workout-history.component'
import { CreateWorkoutComponent } from './create-workout/create-workout.component';
import { WorkoutContentComponent } from './workout-content/workout-content.component';
import { RegistrationComponent } from './registration/registration.component';
import { StartscreenComponent } from './startscreen/startscreen.component';


const routes: Routes = [
  {path: '', component: StartscreenComponent },
  {path: 'registration', component: RegistrationComponent },
  {path: 'user', component: UserComponent },
  {path: 'workouts', component: WorkoutComponent},
  {path: 'workouts/:workoutid', component: WorkoutContentComponent},
  {path: 'createworkout', component: CreateWorkoutComponent},
  {path: 'workouthistory', component: WorkoutHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
