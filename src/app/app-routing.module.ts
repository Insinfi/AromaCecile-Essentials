import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { OilComponent } from './features/oil/oil.component';
import { OilsComponent } from './features/oils/oils.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'oil', component: OilsComponent, canActivate: [AuthGuard] },
  { path: 'oil/:id', component: OilComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
