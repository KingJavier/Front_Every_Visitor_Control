import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=>import('./welcome/welcome.module').then(m=>m.WelcomeModule),
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: ()=>import('./auth/auth.module').then(m=>m.AuthModule),
    pathMatch: 'full',
  },
  {
    path:'**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
