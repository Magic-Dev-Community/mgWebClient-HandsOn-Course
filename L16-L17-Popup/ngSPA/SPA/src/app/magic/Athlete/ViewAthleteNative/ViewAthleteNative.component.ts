import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./ViewAthleteNative.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


@Component({
    selector: 'mga-ViewAthleteNative',
    providers: [...magicProviders],
    styleUrls: ['./ViewAthleteNative.component.css'],
    templateUrl: './ViewAthleteNative.component.html'
})
export class ViewAthleteNative extends TaskBaseMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc: MgFormControlsAccessor;
    createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
}

