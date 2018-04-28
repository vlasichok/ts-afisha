import { Component, OnInit } from '@angular/core';
import {PATH} from "../shared/constants/path.constant";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  path: Object;

  constructor() { }

  ngOnInit() {
    this.path = PATH;
  }

}
