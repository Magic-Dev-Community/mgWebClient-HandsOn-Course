import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    WorkoutList = "WorkoutList",
        Table1 = "Table1",
        Column12 = "Column12",
        Workout_WorkoutType = "Workout_WorkoutType",
        Column13 = "Column13",
        Workout_WorkoutDate = "Workout_WorkoutDate",
        Column14 = "Column14",
        Workout_WorkoutStartTime = "Workout_WorkoutStartTime",
        Column15 = "Column15",
        Workout_WorkoutEndTime = "Workout_WorkoutEndTime",
        Column16 = "Column16",
        Workout_CaloriesBurned = "Workout_CaloriesBurned",
        Column17 = "Column17",
        Workout_WorkoutDistance = "Workout_WorkoutDistance",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Workout_WorkoutType(): FormControl {
        return this.getTableChildFormControl(MgControlName.Workout_WorkoutType);
    }

    get Workout_WorkoutDate(): FormControl {
        return this.getTableChildFormControl(MgControlName.Workout_WorkoutDate);
    }

    get Workout_WorkoutStartTime(): FormControl {
        return this.getTableChildFormControl(MgControlName.Workout_WorkoutStartTime);
    }

    get Workout_WorkoutEndTime(): FormControl {
        return this.getTableChildFormControl(MgControlName.Workout_WorkoutEndTime);
    }

    get Workout_CaloriesBurned(): FormControl {
        return this.getTableChildFormControl(MgControlName.Workout_CaloriesBurned);
    }

    get Workout_WorkoutDistance(): FormControl {
        return this.getTableChildFormControl(MgControlName.Workout_WorkoutDistance);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}