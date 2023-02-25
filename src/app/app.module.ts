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
import { SharePlanningComponent } from './pages/share-planning/share-planning.component';
import { PlanningsSharedComponent } from './pages/plannings-shared/plannings-shared.component';
import { NgbModule, NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { SearchUserComponent } from './components/search-user/search-user.component';
import { ValidateAccountComponent } from './pages/validate-account/validate-account.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MyPlanningsComponent,
    NavbarComponent,
    InscriptionComponent,
    AvatarSelectComponent,
    SharePlanningComponent,
    PlanningsSharedComponent,
    SearchUserComponent,
    ValidateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbToast
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
