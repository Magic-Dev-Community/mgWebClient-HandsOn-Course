import {
  Component,
  Injectable
} from '@angular/core';
import {
  TaskBaseMagicComponent,
  magicProviders
} from "@magic-xpa/angular";
import { MyOverlayContainer } from './MyOverlayContainer';
// change this to correct path depending on where you place MyOverlayContainer.ts
@Injectable()

export class MyOverlayContainerProvider {

getComponent() {

   return MyOverlayContainer;

}

}
