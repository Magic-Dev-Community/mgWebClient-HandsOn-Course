# mgWebClient-HandsOn-Course
## Lesson 18-20 - Complex View


Notes:

Lesson 18:

For now, I've abandoned trying to make the final component.html and component.ts files work, they differ too far from where v4.8 has evolved to.

As I wrote on the Facebook Group:

```
Thought #1: This stuff actually works pretty well and pretty easy. 
```
```
Thought #2: You can't copy/paste html/ts code from the course and expect it to work.
It's a whole different version or approach or it just doesn't match v4.8. You have to make your peace with this. 
The course is actually straightforward once you accept it's an out-of-date guide map to a city where the 
city planners have changed street signs, routes and whole buildings. 
I don't think it's worthwhile relying on the course for how they make changes to the html or ts, 
swooping in at the last minute to copy/paste a makeover. 
That will lead to pain. 
BUT the technology is actually quite simple and very Magic still. 
And the course gives you all the clues you need. 
Instead, cherry pick the changes and differences, it actually adds to the learning process.
```

That aside, code, the lesson, the approach works.

Lesson 19:

Turn off Confirm Update in the CreateWorkout program.

I didn't waste time on CreateWorkout.component.html and will revist making things pretty on a second pass.

Lesson 20:

Using class name and conditions section, don't vars in quotes:

```
[class.high]="mg.getValue(mgc.Workout_WorkoutDistance, row.rowId) > '10'"
[class.low]="mg.getValue(mgc.Workout_WorkoutDistance, row.rowId) <= '3'"
[class.average]="mg.getValue(mgc.Workout_WorkoutDistance, row.rowId) >= '4' && mg.getValue(mgc.Workout_WorkoutDistance, row.rowId) <= '10'"
```

Same for Using ngClass:

```
[ngClass]= "{ 'calLow': mg.getValue(mgc.Workout_CaloriesBurned, row.rowId) <= '300',
              'calMed': mg.getValue(mgc.Workout_CaloriesBurned, row.rowId) > '300' && mg.getValue(mgc.Workout_CaloriesBurned, row.rowId) <= '500',
              'calHigh': mg.getValue(mgc.Workout_CaloriesBurned, row.rowId) > '500'
            }"
```
