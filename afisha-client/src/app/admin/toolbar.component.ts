import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {PATH} from "../shared/constants/path.constant";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToSection(event): void{
    if(!event){
      return;
    }
    let path = event.target.textContent.toLowerCase();
    if(path === "logout"){
      console.log(path);
    } else {
      this.router.navigate([PATH.ADMIN + '/' + path]);
    }
  }
}
