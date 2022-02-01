import {
  Component
} from '@angular/core';
import {
  TaskBaseMagicComponent,
  magicProviders
} from "@magic-xpa/angular";
@Component({
  selector: 'mga-StartProgram',
  providers: [...magicProviders],
  styleUrls: ['./StartProgram.component.css'],
  templateUrl: './StartProgram.component.html'
}) export class StartProgram extends TaskBaseMagicComponent {
isExpanded: boolean;

ToggleMenu() {
  const menu = document.getElementById('Menu');
  const sideNav = document.getElementById('SideNav');
  const main = document.getElementById('Main');
  menu.classList.toggle('change');
  this.isExpanded = !this.isExpanded;
  if (this.isExpanded) {
    sideNav.style.width = '250px';
    main.style.marginLeft = '250px';
    main.style.transition = '0.5s ease-out';
 } else {
  sideNav.style.width = '0';
  main.style.marginLeft = '0';
  }
}
}
