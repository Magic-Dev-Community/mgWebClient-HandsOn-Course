import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    SelectCity = "SelectCity",
        Table6 = "Table6",
        Column9 = "Column9",
        CapitalCities_City = "CapitalCities_City",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column9',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get CapitalCities_City(): FormControl {
        return this.getTableChildFormControl(MgControlName.CapitalCities_City);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}