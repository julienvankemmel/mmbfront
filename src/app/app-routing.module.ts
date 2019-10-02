import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackpackComponent } from './backpack/backpack.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { ProfilformComponent } from './profilform/profilform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { AuthGuard } from './auth.guard';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent,  data: {animation: 'login'}},
  {path: 'backpack/:country', component: BackpackComponent},
  {path: 'register', component: RegisterComponent,  data: {animation: 'register'}},
  {path: 'contact', component: ContactComponent},

  /**
   * les pages "profile" sont protégées par authguard
   */
  {path: 'profileform/:id', component: ProfilformComponent,/* canActivate: [AuthGuard]*/ data: {animation: 'profileform'}},
  {path: 'dashboard', component: DashboardComponent,/* canActivate: [AuthGuard],*/ data: {animation: 'profile'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
