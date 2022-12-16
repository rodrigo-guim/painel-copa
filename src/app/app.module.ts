import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReplayDialogComponent } from './replay-dialog/replay-dialog.component';
import { HistoryDialogComponent } from './history-dialog/history-dialog.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { AboutDialogComponent } from './about-dialog/about-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ReplayDialogComponent,
    HistoryDialogComponent,
    InfoDialogComponent,
    AboutDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
