import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BallComponent } from './ball/ball.component';
import { BackgroundComponent } from './background/background.component';
import { GameComponent } from './game.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GameComponent, BallComponent, BackgroundComponent],
  exports: [GameComponent, BallComponent, BackgroundComponent],
})
export class GameModule {}
