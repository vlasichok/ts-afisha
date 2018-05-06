import { Component, OnInit } from '@angular/core';
import {PATH} from "../shared/constants/path.constant";
import {AuthService} from "../shared/services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  path: Object;

  constructor(private authService: AuthService) { }


  ngOnInit() {
    this.path = PATH;
  }



}
