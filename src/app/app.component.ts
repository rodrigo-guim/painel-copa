import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AboutDialogComponent } from './about-dialog/about-dialog.component';
import { HistoryDialogComponent } from './history-dialog/history-dialog.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { ReplayDialogComponent } from './replay-dialog/replay-dialog.component';


// {token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzljMDM4ZTA2ZjFjOGQwYTlhZmFjOWEiLCJpYXQiOjE2NzExNjg5MTEsImV4cCI6MTY3MTI1NTMxMX0.bAPBns1r_LbU_IyfCOx6Vq2CEkRAWL-SHISC9no7-y8"}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private audio!: HTMLAudioElement;

  constructor(
    public dialog: MatDialog
  ) {}

  public openReplayDialog(): void {
    this.playAudio('open');
    let dialog = this.dialog.open(ReplayDialogComponent, {
    });
    dialog.afterClosed()
      .subscribe({
        next: () => this.audio.pause()
      })
  }

  public openHistoryDialog(): void {
    this.playAudio('history');
    let dialog = this.dialog.open(HistoryDialogComponent, {
    });
    dialog.afterClosed()
      .subscribe({
        next: () => this.audio.pause()
      })
  }

  public openInfoDialog(): void {
    this.playAudio('cuica');
    let dialog = this.dialog.open(InfoDialogComponent, {
    });
    dialog.afterClosed()
      .subscribe({
        next: () => this.audio.pause()
      })
  }

  public openAboutDialog(): void {
    this.playAudio('sobre');
    let dialog = this.dialog.open(AboutDialogComponent, {
    });
    dialog.afterClosed()
      .subscribe({
        next: () => this.audio.pause()
      })
  }

  private playAudio(fileName: string): void {
    this.audio = new Audio(`assets/${fileName}.wav`);
    this.audio.play();
  }

}
