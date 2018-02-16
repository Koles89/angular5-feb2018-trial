import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = [];
  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.getProducts()
              .subscribe((res: any) => {
                this.products = res;
              });
  }

}
