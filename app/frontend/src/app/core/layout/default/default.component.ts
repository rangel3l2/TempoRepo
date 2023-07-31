import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent {
  public showContainerInTablet?: boolean;
  public showContainerInHandset?: boolean;
  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe([
        Breakpoints.TabletPortrait,
        Breakpoints.HandsetLandscape
      ])
      .subscribe((state ) => {
        const breakpoints = state.breakpoints;
        this.showContainerInHandset = false;
        this.showContainerInTablet = false;
        if (breakpoints[Breakpoints.TabletPortrait]) {
         this.showContainerInTablet = true;
         console.log("screens matches TabletPortrait");
        }
        else if (breakpoints[Breakpoints.HandsetLandscape]) {
         this.showContainerInHandset = true;
         console.log("screens matches HandsetLandscape");
       }
      });
  }
}
