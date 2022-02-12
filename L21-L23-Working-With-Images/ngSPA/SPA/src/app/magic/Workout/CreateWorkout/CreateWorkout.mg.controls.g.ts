import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CreateWorkout = "CreateWorkout",
        Label9 = "Label9",
        V_vWorkoutType = "V_vWorkoutType",
        Label10 = "Label10",
        V_vWorkoutDate = "V_vWorkoutDate",
        Label11 = "Label11",
        V_vWorkoutStartTime = "V_vWorkoutStartTime",
        Label12 = "Label12",
        V_vWorkoutEndTime = "V_vWorkoutEndTime",
        Label13 = "Label13",
        V_vCaloriesBurned = "V_vCaloriesBurned",
        Label14 = "Label14",
        V_vWorkoutDistance = "V_vWorkoutDistance",
        Save = "Save",
        Cancel = "Cancel",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_vWorkoutType(): FormControl {
        return this.fg.controls[MgControlName.V_vWorkoutType] as FormControl;
    }

    get V_vWorkoutDate(): FormControl {
        return this.fg.controls[MgControlName.V_vWorkoutDate] as FormControl;
    }

    get V_vWorkoutStartTime(): FormControl {
        return this.fg.controls[MgControlName.V_vWorkoutStartTime] as FormControl;
    }

    get V_vWorkoutEndTime(): FormControl {
        return this.fg.controls[MgControlName.V_vWorkoutEndTime] as FormControl;
    }

    get V_vCaloriesBurned(): FormControl {
        return this.fg.controls[MgControlName.V_vCaloriesBurned] as FormControl;
    }

    get V_vWorkoutDistance(): FormControl {
        return this.fg.controls[MgControlName.V_vWorkoutDistance] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}