import { Component, OnInit }  from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    templateUrl:'products-list.component.html',
    styleUrls: ['products-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    widthImage: number = 50;
    marginImage: number = 2;
    showImage: boolean=false;
    errorMessage: string;
    listFilter: string;
    products: IProduct[];

    constructor(private _productService: ProductService){

    }
    
    toggleImage(): void {
        this.showImage = !this.showImage
    }
    ngOnInit():void{
        this._productService.getProducts()
                .subscribe(products=>this.products=products,
                    error => this.errorMessage= <any>error);
    }
    onRatingClicked(message: string):void{
        this.pageTitle='Product List : ' + message;
    }

}