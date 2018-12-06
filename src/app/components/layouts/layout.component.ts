import { Component } from '@angular/core';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  titleHeader = ' HOME LAYOUT ';
  //mediaQueryList: MediaQueryList;
  //private _mediaQueryListener: () => void;
  
  events: string[] = [];
  opened: boolean;
  navItems:any = ['HOME', 'FIND RESTAURANTS', 'ADD STALLS', 'YOUR ORDERS', 'FAVOURITES', 'YOUR CART'];

  constructor ( changeDetectorRef: ChangeDetectorRef, mediaMatcher: MediaMatcher ) {
    //this.mediaQueryList = mediaMatcher.matchMedia('(max-width: 600px)');
    //this._mediaQueryListener = () => changeDetectorRef.detectChanges();
    //this.mediaQueryList.addListener(this._mediaQueryListener);
  };
}
