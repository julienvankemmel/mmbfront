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


@NgModule({
  declarations: [
    AppComponent,
    BackpackComponent,
    BackpackItemComponent,
    CategoryBackpackComponent,
    LoginComponent,
    TripComponent,
    NotationComponent,
    SeasonComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
