import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CreateWorkout.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

export interface vWorkoutType {
  index: string;
  displayValue: string;
}

@Component({
    selector: 'mga-CreateWorkout',
    providers: [...magicProviders],
    styleUrls: ['./CreateWorkout.component.css'],
    templateUrl: './CreateWorkout.component.html'
})
export class CreateWorkout extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc: MgFormControlsAccessor;
    createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CreateWorkout";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "30%";
    private static readonly height: string = "60%";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick = true;
    vWorkoutType: vWorkoutType[] = [
      {index: 'C', displayValue: 'Cycling'},
      {index: 'W', displayValue: 'Walking'},
      {index: 'R', displayValue: 'Running'},
      {index: 'T', displayValue: 'Trekking'}
    ];
    X() {
        return CreateWorkout.x;
    }
    Y() {
        return CreateWorkout.y;
    }
    Width(): string {
        return CreateWorkout.width;
    }
    Height(): string {
        return CreateWorkout.height;
    }
    IsCenteredToWindow() {
        return CreateWorkout.isCenteredToWindow;
    }
    FormName() {
        return CreateWorkout.formName;
    }
    ShowTitleBar() {
        return CreateWorkout.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CreateWorkout.shouldCloseOnBackgroundClick;
    }
}
