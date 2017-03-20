import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'my-application',
  templateUrl: './app.component.html'
})
export class ApplicationComponent {
  public tooHighResolution: boolean;
  public notificationBarState: boolean;
  public notificationBarType: string;
  public cookiesBarVisible: boolean;
  @ViewChild('notificationBarText') public notificationBarText: ElementRef;

  constructor() {
    this.notificationBarState = false;
    this.notificationBarType = ' ';
    this.cookiesBarVisible = false;
    this.setResolutionInfoState(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event: any) {
    this.setResolutionInfoState(event.target.innerWidth);
  }

  // Resolution Info
  public setResolutionInfoState(width: number) {
    this.tooHighResolution = width > 2048;
  }

  public resolutionInfoClose() {
    this.tooHighResolution = false;
  }

  public notificationBarClose() {
    this.notificationBarState = false;
  }

  public cookiesBarClose() {
    this.cookiesBarVisible = false;
    localStorage.setItem('cookiesApproval', 'true');
  }
}
