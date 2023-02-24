import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./pages/auth/auth.component";
import {MyPlanningsComponent} from "./pages/my-plannings/my-plannings.component";
import {IsSignInGuard} from "./guards/is-sign-in.guard";


const routes: Routes = [
  { path: 'my-plannings', component: MyPlanningsComponent, canActivate: [ IsSignInGuard ]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
