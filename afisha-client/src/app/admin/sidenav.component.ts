import {Component, NgZone, OnInit} from '@angular/core';
import {PATH} from "../shared/constants/path.constant";

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  path: Object;
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  constructor(zone: NgZone) {
    this.mediaMatcher.addListener(MediaQueryList =>
      zone.run(() => this.mediaMatcher = MediaQueryList));
  }

  ngOnInit() {
    this.path = PATH;
  }

  isScreenSmall(): boolean{
    return this.mediaMatcher.matches;
  }
}
