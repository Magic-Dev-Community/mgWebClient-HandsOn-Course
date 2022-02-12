import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CreateAthlete = "CreateAthlete",
        Label1 = "Label1",
        vName = "vName",
        Label3 = "Label3",
        vCity = "vCity",
        Label5 = "Label5",
        vPhone = "vPhone",
        Label7 = "Label7",
        vEmail = "vEmail",
        Label9 = "Label9",
        vDateOfBirth = "vDateOfBirth",
        Label11 = "Label11",
        vHeight = "vHeight",
        Label13 = "Label13",
        vWeight = "vWeight",
        Label15 = "Label15",
        vComment = "vComment",
        Create = "Create",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get vName(): FormControl {
        return this.fg.controls[MgControlName.vName] as FormControl;
    }

    get vCity(): FormControl {
        return this.fg.controls[MgControlName.vCity] as FormControl;
    }

    get vPhone(): FormControl {
        return this.fg.controls[MgControlName.vPhone] as FormControl;
    }

    get vEmail(): FormControl {
        return this.fg.controls[MgControlName.vEmail] as FormControl;
    }

    get vDateOfBirth(): FormControl {
        return this.fg.controls[MgControlName.vDateOfBirth] as FormControl;
    }

    get vHeight(): FormControl {
        return this.fg.controls[MgControlName.vHeight] as FormControl;
    }

    get vWeight(): FormControl {
        return this.fg.controls[MgControlName.vWeight] as FormControl;
    }

    get vComment(): FormControl {
        return this.fg.controls[MgControlName.vComment] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}