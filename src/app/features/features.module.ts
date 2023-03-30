import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OilsComponent } from './oils/oils.component';
import { OilComponent } from './oil/oil.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    OilsComponent,
    OilComponent],
  imports: [
    CommonModule,
    TooltipModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    FormsModule,
    TableModule
  ],
  exports:[
    LoginComponent,
    HomeComponent]
})
export class FeaturesModule { }
