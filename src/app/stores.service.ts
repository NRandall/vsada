import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Response } from '@angular/http';
// A service for interacting with store info
@Injectable()
export class StoresService {

  // Variable declarations
  stores: Array<any>;
  stores2: any[] = [];
  store: any;
  query: string = '';
  @Output() queryUpdated = new EventEmitter();

  constructor(private http: Http) {}

  // Sets the current search parameter and emits the updated query to update
  // any subscribed members
  setQuery(query: string) {
    this.query = query;
    this.queryUpdated.emit(this.query);
  }

  // Returns the current search parameter
  getQuery() {
    return this.query;
  }

  // Gets store info from the json file updated hourly from headless drupal
  getStoresFromDrupal() {
    return this.http.get('./stores.json');
  }
}
