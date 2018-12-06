import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators';

export interface Config {
  heroesUrl: string;
  textfile: string;
}

@Injectable()
export class ConfigService {
    configUrl = 'assets/config.json';
    stallUrl = 'assets/Restaurants.json';
    largeData = 'assets/hotel.json';
    menuUrl = 'assets/menu.json';
    orderUrl = 'assets/orders.json';
    GenericMenu = 'assets/generic-menu.json';

    orderList : any;

    constructor(private http: HttpClient) {

    }
    getConfig() {
        return this.http.get<Config>(this.configUrl);
    }
    getRestos() {
        return this.http.get(this.stallUrl);
    }
    getFullData() {
        return this.http.get(this.largeData);
    }
    fetchMenuLists(){
        return this.http.get(this.menuUrl);
    }
    fetchAllOrders() {
        return this.http.get(this.orderUrl);
    }
    // GET THE GENERAL MENU FOR RESTUARANTS 
    getGenericMenu() {
        return this.http.get(this.GenericMenu);
    }
}