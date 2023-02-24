import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthComponent } from './pages/auth/auth.component';
import { MyPlanningsComponent } from './pages/my-plannings/my-plannings.component';

import { HttpRequestInterceptor } from './Interceptor/http-request/http-request.interceptor';
import { NavbarComponent } from './pages/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MyPlanningsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
