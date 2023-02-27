import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FullCalendarModule } from '@fullcalendar/angular';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthComponent } from './pages/auth/auth.component';
import { MyPlanningsComponent } from './pages/my-plannings/my-plannings.component';

import { HttpRequestInterceptor } from './Interceptor/http-request/http-request.interceptor';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { AvatarSelectComponent } from './components/avatar-select/avatar-select.component';
import { SharePlanningComponent } from './components/share-planning/share-planning.component';
import { PlanningsSharedComponent } from './components/plannings-shared/plannings-shared.component';
import { NgbModule, NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { SearchUserComponent } from './components/search-user/search-user.component';
import { ValidateAccountComponent } from './pages/validate-account/validate-account.component';
import { LostPasswordComponent } from './pages/lost-password/lost-password.component';
import { ModifyPasswordComponent } from './pages/modify-password/modify-password.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { EditableFieldComponent } from './components/editable-field/editable-field.component';
import { PlanningSharingComponent } from './pages/planning-sharing/planning-sharing.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { DetailsEventComponent } from './components/details-event/details-event.component';
import {WeatherModule} from "./weather/weather.module";



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
    ValidateAccountComponent,
    LostPasswordComponent,
    ModifyPasswordComponent,
    MyProfileComponent,
    EditableFieldComponent,
    PlanningSharingComponent,
    CalendarComponent,
    AddEventComponent,
    DetailsEventComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      NgbModule,
      NgbToast,
      WeatherModule,
      FullCalendarModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
