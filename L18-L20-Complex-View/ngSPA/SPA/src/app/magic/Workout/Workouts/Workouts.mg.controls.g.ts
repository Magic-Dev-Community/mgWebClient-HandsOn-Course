import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    Workouts = "Workouts",
        Label2 = "Label2",
        V_vSearch = "V_vSearch",
        Search = "Search",
        Table3 = "Table3",
        Column4 = "Column4",
        Athlete_ID = "Athlete_ID",
        Column6 = "Column6",
        Athlete_Name = "Athlete_Name",
        Column8 = "Column8",
        Athlete_City = "Athlete_City",
        Subform10 = "Subform10",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_vSearch(): FormControl {
        return this.fg.controls[MgControlName.V_vSearch] as FormControl;
    }

    get Athlete_ID(): FormControl {
        return this.getTableChildFormControl(MgControlName.Athlete_ID);
    }

    get Athlete_Name(): FormControl {
        return this.getTableChildFormControl(MgControlName.Athlete_Name);
    }

    get Athlete_City(): FormControl {
        return this.getTableChildFormControl(MgControlName.Athlete_City);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}