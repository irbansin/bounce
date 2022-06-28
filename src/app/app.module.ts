import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { LoginModule } from './login/login.module';
import { GameModule } from './game/game.module';

@NgModule({
  imports: [BrowserModule, FormsModule, LoginModule, GameModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
