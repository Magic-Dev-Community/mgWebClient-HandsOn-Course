import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./City1.mg.controls.g";
import { MgDisplayedColumns } from "./City1.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-City1',
    providers: [...matMagicProviders],
    styleUrls: ['./City1.component.css'],
    templateUrl: './City1.component.html'
})
export class City1 extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    displayedColumns = this.mgdp;
}
