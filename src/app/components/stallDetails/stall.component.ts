import { Component, OnInit }from '@angular/core';
import { ConfigService } from './../../config/config.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

export interface MENUITEM {
    name : string;
    description : string;
    id : string;
    price : string;
    type : string;
    quantity : number;
    cuisine : string;
    category : string;
    consumable : string;
}


@Component({
    selector : 'app-stall',
    templateUrl : 'stall.component.html',
    styleUrls: ['./stall.component.scss'],
    providers: [ConfigService]
})

export class StallComponent {
    menuItems : any;
    largeDataSet : any;
    popularLists : any;
    menuList : MENUITEM[];
    cartList :any[] = [];
    showCartPanel = false;
    stallId : any;

    constructor(
        private _configService:ConfigService,
        private route: ActivatedRoute, 
        private router: Router 
    ) {
        this.getMenuList();
        this.sampleMenu();
    }

    getMenuList() {
        this._configService.getFullData().subscribe(data => {
            this.largeDataSet = data;
            this.popularLists = data['categorys']['1']['menu-items'];
            console.log('Data is: ', this.largeDataSet);
            //console.log('Recommended :', this.popularLists);
        });
    };

    sampleMenu(){
        this._configService.fetchMenuLists().subscribe(res => {
            //console.log('RES :', res);
            this.menuItems = res['categorys'];
            //console.log('Menu List :', this.menuItems);
        });
    };

    addToCart(item){
        console.log('Row', item);
        var cartItem = {
            "id": item.id,
            "name": item.name,
            "price": item.price,
            "cuisine_type" : item.cuisine_type,
            "quantity" : 1,
        };
        if(this.cartList.length > 0 ) {
            var cartItemIndex = this.cartList.findIndex(x => x.id == item.id);
            if( cartItemIndex == -1) {
                this.cartList.push(cartItem);
            } else {
                this.cartList[cartItemIndex].quantity += 1;
            }
        } else {
            this.cartList.push(cartItem);
            this.showCartPanel = true;
        }
    }

    showCart(items){
        console.log('Go to CART PAGE');
        this.router.navigate(['cart', '9456790']);
    }

    ngOnInit() {
        this.stallId = this.route.params.subscribe(params => {
            let id  = params['id'];
            console.log('Show Stall Id : ', id);
        });
    };

    toggleState() {
        console.log('Go back to Dashboard Page');
        this.router.navigate(['layout']);
    }
}