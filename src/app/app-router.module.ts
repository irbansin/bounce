import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: GameComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'game',
    component: GameComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
