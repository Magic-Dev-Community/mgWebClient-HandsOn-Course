import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    ViewAthlete = "ViewAthlete",
        Table1 = "Table1",
        Column11 = "Column11",
        Athlete_ID = "Athlete_ID",
        Column12 = "Column12",
        Athlete_Name = "Athlete_Name",
        Column13 = "Column13",
        Athlete_City = "Athlete_City",
        Column14 = "Column14",
        Athlete_Phone = "Athlete_Phone",
        Column15 = "Column15",
        Athlete_Email = "Athlete_Email",
        Column16 = "Column16",
        Athlete_DateOfBirth = "Athlete_DateOfBirth",
        Column17 = "Column17",
        Athlete_Height = "Athlete_Height",
        Column18 = "Column18",
        Athlete_Weight = "Athlete_Weight",
        Column20 = "Column20",
        EnterRowEditing = "EnterRowEditing",
        SaveRowEditing = "SaveRowEditing",
        CancelRowEditing = "CancelRowEditing",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column11',
        'Column12',
        'Column13',
        'Column14',
        'Column15',
        'Column16',
        'Column17',
        'Column18',
        'Column20',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Athlete_ID(): FormControl {
        return this.getTableChildFormControl(MgControlName.Athlete_ID);
    }

    get Athlete_Name(): FormControl {
        return this.getTableChildFormControl(MgControlName.Athlete_Name);
    }

    get Athlete_City(): FormControl {
        return this.getTableChildFormControl(MgControlName.Athlete_City);
    }

    get Athlete_Phone(): FormControl {
        return this.getTableChildFormControl(MgControlName.Athlete_Phone);
    }

    get Athlete_Email(): FormControl {
        return this.getTableChildFormControl(MgControlName.Athlete_Email);
    }

    get Athlete_DateOfBirth(): FormControl {
        return this.getTableChildFormControl(MgControlName.Athlete_DateOfBirth);
    }

    get Athlete_Height(): FormControl {
        return this.getTableChildFormControl(MgControlName.Athlete_Height);
    }

    get Athlete_Weight(): FormControl {
        return this.getTableChildFormControl(MgControlName.Athlete_Weight);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}