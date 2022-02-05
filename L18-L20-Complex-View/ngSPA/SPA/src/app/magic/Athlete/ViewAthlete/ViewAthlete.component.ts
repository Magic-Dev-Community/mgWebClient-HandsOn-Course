import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./ViewAthlete.mg.controls.g";
import { MgDisplayedColumns } from "./ViewAthlete.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-ViewAthlete',
    providers: [...matMagicProviders],
    templateUrl: './ViewAthlete.component.html'
})
export class ViewAthlete extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    displayedColumns = this.mgdp;
}