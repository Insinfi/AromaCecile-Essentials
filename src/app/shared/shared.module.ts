import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  declarations: [NavigationComponent],
  imports: [
    MenubarModule,
    CommonModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class SharedModule { }
