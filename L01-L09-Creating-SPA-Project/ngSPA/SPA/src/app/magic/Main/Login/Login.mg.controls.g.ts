import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    Login = "Login",
        V_vUser = "V_vUser",
        V_vPassword = "V_vPassword",
        BTLogin = "BTLogin",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_vUser(): FormControl {
        return this.fg.controls[MgControlName.V_vUser] as FormControl;
    }

    get V_vPassword(): FormControl {
        return this.fg.controls[MgControlName.V_vPassword] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}