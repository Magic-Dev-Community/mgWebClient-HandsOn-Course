import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MagicModule, OverlayContainerMagicProvider } from '@magic-xpa/angular';
import { MagicAngularMaterialModule } from '@magic-xpa/angular-material-core';
import { MagicGenLibModule } from './magic/magic.gen.lib.module';
import { MagicRoutingModule } from './app.routes';
import { from } from 'rxjs';
import { MyOverlayContainer } from './customoverlay/MyOverlayContainer';
import { MyOverlayContainerProvider } from './customoverlay/MyOverlayContainerProvider';
@NgModule({
  declarations: [
    AppComponent ,
    MyOverlayContainer
  ],
  entryComponents:[
     MyOverlayContainer
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MagicModule.forRoot(),
    MagicAngularMaterialModule,
    MagicGenLibModule,
    MagicRoutingModule
  ],
  providers: [{provide: OverlayContainerMagicProvider,
      useClass:
      MyOverlayContainerProvider}],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MagicModule, OverlayContainerMagicProvider } from '@magic-xpa/angular';
import { MagicAngularMaterialModule } from '@magic-xpa/angular-material-core';
import { MagicGenLibModule } from './magic/magic.gen.lib.module';
import { MagicRoutingModule } from './app.routes';

import { MyOverlayContainer } from './customoverlay/MyOverlayContainer';
import { MyOverlayContainerProvider } from './customoverlay/MyOverlayContainerProvider';

@NgModule({
  declarations: [
    AppComponent,
    MyOverlayContainer
  ],
  entryComponents: [
    MyOverlayContainer
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MagicModule.forRoot(),
    MagicAngularMaterialModule,
    MagicGenLibModule,
    MagicRoutingModule
  ],
  providers: [{provide: OverlayContainerMagicProvider,
      useClass: MyOverlayContainerProvider}],
  bootstrap: [AppComponent]
})
export class AppModule { }
*/
