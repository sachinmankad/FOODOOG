import { Component, OnInit } from '@angular/core';
import { ConfigService } from './../../config/config.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

const CART_LIST: any[] = [
    {
        "id": "94310",
        "name": "Red Pepper Dip (V)",
        "price": "205.00",
        "cuisine_type" : "vegetarian",
        "quantity" : "1"
    }, {
        "id": "94307",
        "name": "Hummus with PERI-PERI Drizzle (V)",
        "price": "215.00",
        "cuisine_type" : "vegetarian",
        "quantity" : "1"
    }, {
        "id": "94301",
        "name": "Chicken Livers and Portuguese Roll",
        "price": "250.00",
        "cuisine_type" : "non-vegetarian",
        "quantity" : "2"
    }

];


@Component({
  selector: 'order-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [ ConfigService ]
})
export class CartComponent implements OnInit {
  title = 'THIS IS CART';
  cart : any;
  orders: any;
  cartList : any;
  sub : any;

  constructor(
      private _configService:ConfigService, 
      private route: ActivatedRoute,
      private router: Router
  ) {
      this.cart = CART_LIST;
  }

  // Load data ones componet is ready
  ngOnInit() {
      // Subscribe to route params
      this.sub = this.route.params.subscribe(params => {
        let id = params['id'];

        this._configService.fetchAllOrders().subscribe(res => {
            var listData = res;
            //this.cartList = listData.filter(x => x.orderid == id)[0];
            //this.cart = this.cartList['order-items'];
        });
       // Retrieve Pet with Id route param
       // this.petService.findPetById(id).subscribe(dog => this.dog = dog);
       //var booksByStoreID = books.filter(book => book.store_id === this.store.id)
    });
  }

  quantityChange(item, type) {
      console.log('Hello ', item, type);
  };
}

