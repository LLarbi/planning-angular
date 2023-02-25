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
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { AvatarSelectComponent } from './components/avatar-select/avatar-select.component';
import { PlanningsSharedComponent } from './pages/plannings-shared/plannings-shared.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MyPlanningsComponent,
    NavbarComponent,
    InscriptionComponent,
    AvatarSelectComponent,
    PlanningsSharedComponent
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
