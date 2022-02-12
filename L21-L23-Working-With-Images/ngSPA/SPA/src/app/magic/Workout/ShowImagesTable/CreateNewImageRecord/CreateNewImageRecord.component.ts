import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CreateNewImageRecord.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-CreateNewImageRecord',
    providers: [...magicProviders],
    styleUrls: ['./CreateNewImageRecord.component.css'],
    templateUrl: './CreateNewImageRecord.component.html'
})
export class CreateNewImageRecord extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc: MgFormControlsAccessor;
    fileText: string | ArrayBuffer;
    createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "CreateNewImageRecord";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "50%";
    private static readonly height: string = "40%";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick = true;
    X() {
        return CreateNewImageRecord.x;
    }
    Y() {
        return CreateNewImageRecord.y;
    }
    Width(): string {
        return CreateNewImageRecord.width;
    }
    Height(): string {
        return CreateNewImageRecord.height;
    }
    IsCenteredToWindow() {
        return CreateNewImageRecord.isCenteredToWindow;
    }
    FormName() {
        return CreateNewImageRecord.formName;
    }
    ShowTitleBar() {
        return CreateNewImageRecord.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return CreateNewImageRecord.shouldCloseOnBackgroundClick;
    }
    fileUpload(event) {
      const reader = new FileReader();
      reader.readAsDataURL(event.srcElement.files[0]);
      const i = event.srcElement.files[0].type.length;
      const num = 5 + i + 8;
      const me = this;
      reader.onload = function() {
          me.fileText = reader.result;
          // console.log(event.srcElement.files[0].type)
          // console.log(i)
          // console.log (me.fileText);
          // console.log (num);
          // console.log (me.fileText.slice(num));
          // Updating the Magic Variable with the selected image's base64 representation
          me.mg.setValueToControl('vBlob64FromClient', me.fileText.slice(num));
        // Updating the FileName into the Magic Variable
          me.mg.setValueToControl('vFileNameU', event.srcElement.files[0].name);
      }
    }
}
