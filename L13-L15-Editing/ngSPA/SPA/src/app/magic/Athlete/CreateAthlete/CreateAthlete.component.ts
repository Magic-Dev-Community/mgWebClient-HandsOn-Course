/*
import { Component, OnInit } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CreateAthlete.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


@Component({
    selector: 'mga-CreateAthlete',
    providers: [...magicProviders],
    styleUrls: ['./CreateAthlete.component.css'],
    templateUrl: './CreateAthlete.component.html'
})
export class CreateAthlete extends TaskBaseMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc: MgFormControlsAccessor;
    createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
}
*/


import {
  Component, OnInit
} from '@angular/core';
import {
  TaskBaseMagicComponent,
  magicProviders
} from '@magic-xpa/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from 'node_modules/@angular/forms';

@Component({
  selector: 'mga-CreateAthlete',
  providers: [...magicProviders],
  styleUrls: ['./CreateAthlete.component.css'],
  templateUrl: './CreateAthlete.component.html'
})

export class CreateAthlete extends TaskBaseMagicComponent{

  submitted = true;

onSubmit() {

  this.screenFormGroup.reset();

}
}



