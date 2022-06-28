import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BallComponent } from './ball/ball.component';
import { BackgroundComponent } from './background/background.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BallComponent, BackgroundComponent],
  exports: [BallComponent, BackgroundComponent],
})
export class GameModule {}
