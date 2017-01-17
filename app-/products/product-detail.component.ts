import {Component,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {IProduct} from './product';
import { Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
templateUrl:'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit{
    pageTitle:string='Product Details';
    product: IProduct;
    errorMessage: string;
    constructor(private _route: ActivatedRoute,
    private _router: Router,private _productService:ProductService){

    }
    onBack():void{
        this._router.navigate(['/products']);
    }
    ngOnInit():void {       
         let id=+this._route.snapshot.params['id'];
        this._productService.getProductById(id)
                .subscribe(product=>this.product=product,
                    error => this.errorMessage= <any>error);
        this.pageTitle +=`: ${id}`;
    }
}