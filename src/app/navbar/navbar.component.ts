import { Component, OnInit, Output } from '@angular/core';
import { StoresService } from '../stores.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  searchBy(query: string) {
    this.storesService.setQuery(query);
  }

  constructor(private storesService: StoresService) {}

  ngOnInit() {}

}
