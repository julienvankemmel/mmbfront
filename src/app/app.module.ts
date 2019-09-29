import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackpackComponent } from './backpack/backpack.component';
import { BackpackItemComponent } from './backpack-item/backpack-item.component';
import { CategoryBackpackComponent } from './category-backpack/category-backpack.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NotationComponent } from './notation/notation.component';
import { SeasonComponent } from './season/season.component';
import { TripComponent } from './trip/trip.component';
import { UserComponent } from './user/user.component';
import { CategoryItemComponent } from './category-item/category-item.component';
import { CommentComponent } from './comment/comment.component';
import { CountryComponent } from './country/country.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfilformComponent } from './profilform/profilform.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { RecaptchaModule, RecaptchaFormsModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BackpackComponent,
    BackpackItemComponent,
    CategoryBackpackComponent,
    LoginComponent,
    LoginComponent,
    TripComponent,
    NotationComponent,
    SeasonComponent,
    UserComponent,
    CategoryItemComponent,
    CommentComponent,
    CountryComponent,
    RegisterComponent,
    ContactComponent,
    ProfilformComponent,
    FooterComponent,
    HomeComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: { 
        siteKey: '6Ld1HboUAAAAAK6CWhtppdO8tf4azAPdjMgu9Rra',
      } as RecaptchaSettings,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
