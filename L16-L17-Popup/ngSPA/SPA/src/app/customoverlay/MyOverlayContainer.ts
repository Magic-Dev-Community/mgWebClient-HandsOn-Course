import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import {
  BaseMagicOverlayContainer,
  MagicModalInterface
} from "@magic-xpa/angular";
import { ComponentFactoryResolver } from "@angular/core";

@Component({
  selector: "app-my-overlay-container",

  template: `
  <div class="fullbg-overlay"></div>
  <div class="overlay-box1" [ngStyle]="getStyle()">
    <div *ngIf="showtitle">
      <h3
        align="center"
        style="display: flex-direction:row; background-color: #5C6276; color: white;"
      >
        {{ Formname }}
      </h3>
    </div>
    <div>
      <div #overlaybody></div>
    </div>
  </div>
  `,

  styleUrls: ["./MyOverlayContainer.css"]

})
export class MyOverlayContainer extends BaseMagicOverlayContainer
  implements OnInit {
  Formname: string;
  showtitle: boolean;
  formwidth: string;
  /**
   * content will be displayed in this placeholder
   */
  @ViewChild("overlaybody", { read: ViewContainerRef, static: true })
  overlaybodyViewContainerRef;
  /**
   *
   */
  @Input() ModalComp = null;
  /**
   *
   */
  @Input() ModalCompParameters: any = {};
  /**
   *
   */
  @Output() onClose = new EventEmitter();

  /**
   *
   */
  private componentRef = null;

  /**
   *
   * @param componentFactoryResolver
   */
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    super();
  }

  /**
   *
   */
  ngOnInit() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      this.ModalComp
    );
    this.componentRef = this.overlaybodyViewContainerRef.createComponent(
      factory
    );
    let magicModalInterface: MagicModalInterface = this.componentRef
      .instance as MagicModalInterface;
    this.Formname = magicModalInterface.FormName();
    this.showtitle = magicModalInterface.ShowTitleBar();
    this.formwidth = magicModalInterface.Width();
    Object.assign(this.componentRef.instance, this.ModalCompParameters);

    //  modal.Width
  }

  getStyle() {
    let styles = {};
    let modal: MagicModalInterface = (
      this.componentRef.instance
    );

    styles["width"] = modal.Width();
    styles["height"] = modal.Height();
    styles["top"] = modal.X() + "vh";
    styles["left"] = modal.Y() + "vw";

    // if(modal.Width()!='100%'){
    //   styles['border'] = '1px solid grey';
    // }

    return styles;
  }

  /**
   *
   */
  OnClose() {
    this.onClose.emit();
  }
}
