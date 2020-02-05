import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { StartscreenComponent } from './startscreen/startscreen.component';
import { WorkoutComponent } from './workout/workout.component';
import { HttpClientModule } from '@angular/common/http';
import { ExerciseComponent } from './exercise/exercise.component';
import { UserComponent } from './user/user.component';
import { WorkoutHistoryComponent } from './workout-history/workout-history.component';
import { CreateWorkoutComponent } from './create-workout/create-workout.component';
import { FormsModule } from '@angular/forms';
import { WorkoutContentComponent } from './workout-content/workout-content.component';
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    StartscreenComponent,
    WorkoutComponent,
    ExerciseComponent,
    UserComponent,
    WorkoutHistoryComponent,
    CreateWorkoutComponent,
    WorkoutContentComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
