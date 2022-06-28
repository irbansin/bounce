import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BallComponent } from './ball/ball.component';
import { BackgroundComponent } from './background/background.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, BallComponent, BackgroundComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
