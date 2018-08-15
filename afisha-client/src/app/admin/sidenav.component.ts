import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {PATH} from "../shared/constants/path.constant";
import {Router} from "@angular/router";
import {MatDrawer} from "@angular/material";

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  path: Object;
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  constructor(zone: NgZone, private router: Router) {
    this.mediaMatcher.addListener(MediaQueryList =>
      zone.run(() => this.mediaMatcher = MediaQueryList));
  }

  @ViewChild(MatDrawer) drawer: MatDrawer;

  ngOnInit() {
    this.path = PATH;
    this.router.events.subscribe(() => {
      if(this.isScreenSmall()){
        this.drawer.close();
      }
    });
  }

  isScreenSmall(): boolean{
    return this.mediaMatcher.matches;
  }
}
