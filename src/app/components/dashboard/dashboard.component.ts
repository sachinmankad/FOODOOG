import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ConfigService } from './../../config/config.service';

export const LOCATIONS = [{
    "location_name" : "Trivandrum",
    "location_id" : "100",
},{
    "location_name" : "Kochi",
    "location_id" : "101",
},{
    "location_name" : "Chennai",
    "location_id" : "102",
},{
    "location_name" : "Banglore",
    "location_id" : "103",
},{
    "location_name" : "Trivandrum",
    "location_id" : "100",
}];


export interface Config {
  heroesUrl: string;
  textfile: string;
}

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ConfigService]
})
export class DashboardComponent implements OnInit {
    title = 'DASHBOARD';
    config : Config;
    stalls : any;
    locations : any;
    fillerContent = Array.from({length: 12}, () =>
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut`);   
        
    constructor( 
        private _configService:ConfigService, 
        private route: ActivatedRoute, 
        private router: Router 
    ) {
        this.locations = LOCATIONS;
    }

    showHotels(event, item) {
        if(event.isUserInput) {
            this._configService.getRestos().subscribe(stalls => {
                var sampleList = stalls['restaurants'];
                this.stalls = sampleList.filter( x => x.location_id == item.location_id );
            });
        }
    };

    getMenu(stallData){
        this.router.navigate(['stall', stallData.id]);
    }

    ngOnInit(){
        let hello = this._configService.getConfig()
            .subscribe((data: Config) => this.config = {
                heroesUrl: data['heroesUrl'],
                textfile:  data['textfile']
            });  
    }
}
