import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MerchantListComponent} from "./merchant-list/merchant-list.component";
import {AuthGuard} from "./interceptor/auth.guard";


const routes: Routes = [
  {path: '', component: MerchantListComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
