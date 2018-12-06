import { Component } from '@angular/core';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  title = 'fudAM6';
  mediaQueryList: MediaQueryList;
  private _mediaQueryListener: () => void;

  events: string[] = [];
  opened: boolean;
  fillerNav = Array.from({length: 9}, (_, i) => `Nav Item ${i + 1}`);
  navItems:any = ['HOME', 'FIND RESTAURANTS', 'ADD STALLS', 'YOUR ORDERS', 'FAVOURITES', 'YOUR CART'];

  constructor(changeDetectorRef: ChangeDetectorRef, mediaMatcher: MediaMatcher) {
    this.mediaQueryList = mediaMatcher.matchMedia('(max-width: 600px)');
    this._mediaQueryListener = () => changeDetectorRef.detectChanges();
    this.mediaQueryList.addListener(this._mediaQueryListener);
  }

  ngOnDestroy(): void {
    this.mediaQueryList.removeListener(this._mediaQueryListener);
  }
}
