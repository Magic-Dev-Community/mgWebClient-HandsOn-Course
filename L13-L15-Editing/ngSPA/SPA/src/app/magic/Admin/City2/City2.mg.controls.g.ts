import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    City2 = "City2",
        Table1 = "Table1",
        Column4 = "Column4",
        CapitalCities_City = "CapitalCities_City",
        Column5 = "Column5",
        CapitalCities_Country = "CapitalCities_Country",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get CapitalCities_City(): FormControl {
        return this.getTableChildFormControl(MgControlName.CapitalCities_City);
    }

    get CapitalCities_Country(): FormControl {
        return this.getTableChildFormControl(MgControlName.CapitalCities_Country);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}