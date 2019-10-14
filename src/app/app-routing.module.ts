import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackpackComponent } from './backpack/backpack.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { ProfilformComponent } from './profilform/profilform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BackpackpageComponent } from './backpackpage/backpackpage.component';
import { BackpackformComponent } from './backpackform/backpackform.component';
import { TrippageComponent } from './trippage/trippage.component';
import { TripformComponent } from './tripform/tripform.component';
import { AuthGuard } from './auth.guard';
import { CountryComponent } from './country/country.component';
import { PostpageComponent } from './postpage/postpage.component';
import { BackpackItemComponent } from './backpack-item/backpack-item.component';


const routes: Routes = [

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent,  data: {animation: 'home'}},
  {path: 'login', component: LoginComponent,  data: {animation: 'login'}},
  {path: 'backpack/:country', component: BackpackComponent},
  {path: 'register', component: RegisterComponent,  data: {animation: 'register'}},
  {path: 'contact', component: ContactComponent},
  {path: 'country/:name/:id', component: CountryComponent},
  
  
  /**
   * ces pages sont protégées par authguard
   */
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: {animation: 'profile'}},
  {path: 'profileform/:id', component: ProfilformComponent, canActivate: [AuthGuard], data: {animation: 'profileform'}},
  {path: 'backpackpage/:id', component: BackpackpageComponent, canActivate: [AuthGuard], data: {animation: 'backpackpage'}},
  {path: 'backpackform/:id', component: BackpackformComponent, canActivate: [AuthGuard], data: {animation: 'backpackform'}},
  {path: 'trippage/:id', component: TrippageComponent, canActivate: [AuthGuard], data: {animation: 'trippage'}},
  {path: 'tripform/:id', component: TripformComponent, canActivate: [AuthGuard], data: {animation: 'tripform'}},
  {path: 'profileform/:id', component: ProfilformComponent, canActivate: [AuthGuard], data: {animation: 'profileform'}},
  {path: 'postpage/:id', component: PostpageComponent, canActivate: [AuthGuard], data: {animation: 'postpage'}},
  {path: 'backpack/:name/:id', component: BackpackItemComponent,  canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
