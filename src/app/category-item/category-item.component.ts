import { Component, OnInit } from '@angular/core';
import { CategoryItemService } from '../category-item.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  constructor(private categoryitemService : CategoryItemService) { }
  categoryItem;
  ngOnInit() {
    this.categoryItem = this.categoryitemService.getCategoryItem()
    .subscribe(data =>{
      this.categoryItem=data;
    })
  }

}
