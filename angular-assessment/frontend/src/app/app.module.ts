import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './routes/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { VideosComponent } from './routes/videos/videos.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, VideosComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
