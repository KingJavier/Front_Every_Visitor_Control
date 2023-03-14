import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    PagenotfoundComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FooterComponent,
    NavbarComponent,
    PagenotfoundComponent,
  ]
})
export class SharedModule { }
