import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayerInfoComponent } from './player-info/player-info.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },

  {
    path:'infoPlayer',
    component: PlayerInfoComponent
  },
  {
    path:'infoPlayer/:id',
    component: PlayerInfoComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
