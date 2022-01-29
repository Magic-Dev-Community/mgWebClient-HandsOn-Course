import { Component, OnInit, Input } from '@angular/core';

interface SideMenuItem {
isOpen?: boolean;
name?: string;
url?: string;
icon?: string;
children?: SideMenuItem[];
}


@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
_source: SideMenuItem[];

@Input() set source (val: string | SideMenuItem[]){
if (val && typeof val === 'string'){
  this._source = JSON.parse(val);
   } else {
  this._source = val as SideMenuItem[];
   }
}

liToggle (item: any, e: MouseEvent) {
  item.isOpen = !item.isOpen;
  e.stopPropagation();
}
aClick(e: MouseEvent) {
e.stopPropagation();
}
}
