import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CreateNewImageRecord = "CreateNewImageRecord",
        Label22 = "Label22",
        vImageDate = "vImageDate",
        Label23 = "Label23",
        vImageTime = "vImageTime",
        Label24 = "Label24",
        vDescription = "vDescription",
        Label25 = "Label25",
        vImagePath = "vImagePath",
        SaveNewImage = "SaveNewImage",
        Cancel = "Cancel",
        mgGetFile = "mgGetFile",
        vBlob64FromClient = "vBlob64FromClient",
        Label30 = "Label30",
        vServerFile = "vServerFile",
        Label32 = "Label32",
        vfilename = "vfilename",
        Label34 = "Label34",
        vFileNameU = "vFileNameU",
        Label36 = "Label36",
        vFileType = "vFileType",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get vImageDate(): FormControl {
        return this.fg.controls[MgControlName.vImageDate] as FormControl;
    }

    get vImageTime(): FormControl {
        return this.fg.controls[MgControlName.vImageTime] as FormControl;
    }

    get vDescription(): FormControl {
        return this.fg.controls[MgControlName.vDescription] as FormControl;
    }

    get vImagePath(): FormControl {
        return this.fg.controls[MgControlName.vImagePath] as FormControl;
    }

    get vBlob64FromClient(): FormControl {
        return this.fg.controls[MgControlName.vBlob64FromClient] as FormControl;
    }

    get vServerFile(): FormControl {
        return this.fg.controls[MgControlName.vServerFile] as FormControl;
    }

    get vfilename(): FormControl {
        return this.fg.controls[MgControlName.vfilename] as FormControl;
    }

    get vFileNameU(): FormControl {
        return this.fg.controls[MgControlName.vFileNameU] as FormControl;
    }

    get vFileType(): FormControl {
        return this.fg.controls[MgControlName.vFileType] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}