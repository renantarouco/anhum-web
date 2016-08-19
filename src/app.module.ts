import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';
import { runEffects } from '@ngrx/effects';

import { AppComponent } from './app/app.component';
import { appReducer } from './app/app.reducer';
import { PulseService } from './app/pulse.service';
import { PlayerService } from './app/player.service';
import { SamplesService } from './app/samples.service';
import { TimeService }from './app/time.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.provideStore(appReducer)
  ],
  providers: [
    runEffects(PulseService, PlayerService),
    {provide: 'bpm', useValue: 180},
    {provide: 'audioCtx', useValue: new AudioContext()},
    SamplesService,
    TimeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}    