import { Component, OnInit } from '@angular/core';
import {PATH} from "../shared/constants/path.constant";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  path: Object;

  constructor() { }

  ngOnInit() {
    this.path = PATH;
  }
}
