import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import { ProductDetailComponent } from '../products/product-detail.component';
import { ProductListComponent } from '../products/product-list.component';
import { ProductFilterPipe } from '../products/product-filter.pipe';
import { ProductDetailGuard } from '../products/product-guard.service';

@NgModule({
    imports:[
        RouterModule.forChild([            
            { path: 'products', component: ProductListComponent },
            { path: 'products/:id', canActivate:[ProductDetailGuard], 
            component: ProductDetailComponent },
        ])
    ],
    exports:[
        RouterModule
    ]
})
export class ProductRoutingModule{

}