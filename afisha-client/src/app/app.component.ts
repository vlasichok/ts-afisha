import { Component } from '@angular/core';
import {PATH} from "./shared/constants/path.constant";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) {

  }

  /**
   * This function will check if the current path is /search, if true it hides the navbar
   * @returns {boolean}
   */
  show(): boolean {
    let bool = this.router.url === "/" + PATH.SEARCH;
    return bool;
  }
}
