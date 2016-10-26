import { Component, OnInit } from '@angular/core';
import { StoresService } from '../stores.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  searchBy(query: string) {
    console.log(query);
    this.storesService.setQuery(query);
  }

  constructor(private storesService: StoresService) {}

  ngOnInit() {
  }

}
