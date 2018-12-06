import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutComponent } from './components/layouts/layout.component';
import { StallComponent } from './components/stallDetails/stall.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
   { path: '', redirectTo: 'layout', pathMatch: 'full' },
   { path : 'layout', component : LayoutComponent },
   { path: 'dashboard', component: DashboardComponent },
   { path: 'stall', component: StallComponent },
   { path: 'stall/:id', component: StallComponent },
   { path: 'cart/:id', component: CartComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],  
    exports: [ RouterModule ],
})

export class AppRoutingModule {}