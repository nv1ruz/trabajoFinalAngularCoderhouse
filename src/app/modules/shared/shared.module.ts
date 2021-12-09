import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { TabsComponent } from './components/tabs/tabs.component';



@NgModule({
  declarations: [
    NavbarComponent,
    TabsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    TabsComponent
  ]
})
export class SharedModule { }
