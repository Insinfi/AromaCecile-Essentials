import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [NavigationComponent],
  imports: [
    MenubarModule,
    CommonModule,
    ButtonModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class SharedModule { }
