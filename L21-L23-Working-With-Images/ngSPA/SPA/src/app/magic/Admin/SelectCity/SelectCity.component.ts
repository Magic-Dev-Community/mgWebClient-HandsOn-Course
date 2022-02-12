import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./SelectCity.mg.controls.g";
import { MgDisplayedColumns } from "./SelectCity.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-SelectCity',
    providers: [...matMagicProviders],
    styleUrls: ['./SelectCity.component.css'],
    templateUrl: './SelectCity.component.html'
})
export class SelectCity extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "Select City";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "300px";
    private static readonly height: string = "525px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick = false;
    X() {
        return SelectCity.x;
    }
    Y() {
        return SelectCity.y;
    }
    Width(): string {
        return SelectCity.width;
    }
    Height(): string {
        return SelectCity.height;
    }
    IsCenteredToWindow() {
        return SelectCity.isCenteredToWindow;
    }
    FormName() {
        return SelectCity.formName;
    }
    ShowTitleBar() {
        return SelectCity.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return SelectCity.shouldCloseOnBackgroundClick;
    }
    displayedColumns = this.mgdp;
}
