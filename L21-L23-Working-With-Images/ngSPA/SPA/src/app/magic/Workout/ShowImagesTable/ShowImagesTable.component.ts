import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./ShowImagesTable.mg.controls.g";
import { MgDisplayedColumns } from "./ShowImagesTable.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-ShowImagesTable',
    providers: [...matMagicProviders],
    styleUrls: ['./ShowImagesTable.component.css'],
    templateUrl: './ShowImagesTable.component.html'
})
export class ShowImagesTable extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "ShowImagesTable";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "40%";
    private static readonly height: string = "25%";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick = true;
    X() {
        return ShowImagesTable.x;
    }
    Y() {
        return ShowImagesTable.y;
    }
    Width(): string {
        return ShowImagesTable.width;
    }
    Height(): string {
        return ShowImagesTable.height;
    }
    IsCenteredToWindow() {
        return ShowImagesTable.isCenteredToWindow;
    }
    FormName() {
        return ShowImagesTable.formName;
    }
    ShowTitleBar() {
        return ShowImagesTable.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return ShowImagesTable.shouldCloseOnBackgroundClick;
    }
    displayedColumns = this.mgdp;
}
