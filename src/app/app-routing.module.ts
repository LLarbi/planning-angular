import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./pages/auth/auth.component";
import {MyPlanningsComponent} from "./pages/my-plannings/my-plannings.component";
import {IsSignInGuard} from "./guards/is-sign-in.guard";
import {InscriptionComponent} from "./pages/inscription/inscription.component";
import {ValidateAccountComponent} from "./pages/validate-account/validate-account.component";
import {LostPasswordComponent} from "./pages/lost-password/lost-password.component";
import {ModifyPasswordComponent} from "./pages/modify-password/modify-password.component";
import {MyProfileComponent} from "./pages/my-profile/my-profile.component";
import {PlanningSharingComponent} from "./pages/planning-sharing/planning-sharing.component";

const routes: Routes = [
  {path: 'my-plannings', component: MyPlanningsComponent, canActivate: [IsSignInGuard]},
  {path: 'plannings-shared', component: PlanningSharingComponent, canActivate: [IsSignInGuard]},
  {path: 'my-profil', component: MyProfileComponent, canActivate: [IsSignInGuard]},
  {path: 'login', component: AuthComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'validate-account/:jwt', component: ValidateAccountComponent},
  {path: 'modify-password/:jwt', component: ModifyPasswordComponent},
  {path: 'lost-password', component: LostPasswordComponent},
  {path: '**', redirectTo: "/my-plannings"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
