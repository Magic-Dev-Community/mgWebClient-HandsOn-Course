import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    ShowImagesTable = "ShowImagesTable",
        Table1 = "Table1",
        Column13 = "Column13",
        ImageID = "ImageID",
        Column14 = "Column14",
        ImageDate = "ImageDate",
        Column15 = "Column15",
        ImageTime = "ImageTime",
        Column16 = "Column16",
        Description = "Description",
        Column17 = "Column17",
        ImagePath = "ImagePath",
        NewImage = "NewImage",
        ExitBtn = "ExitBtn",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column13',
        'Column14',
        'Column15',
        'Column16',
        'Column17',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get ImageID(): FormControl {
        return this.getTableChildFormControl(MgControlName.ImageID);
    }

    get ImageDate(): FormControl {
        return this.getTableChildFormControl(MgControlName.ImageDate);
    }

    get ImageTime(): FormControl {
        return this.getTableChildFormControl(MgControlName.ImageTime);
    }

    get Description(): FormControl {
        return this.getTableChildFormControl(MgControlName.Description);
    }

    get ImagePath(): FormControl {
        return this.getTableChildFormControl(MgControlName.ImagePath);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}