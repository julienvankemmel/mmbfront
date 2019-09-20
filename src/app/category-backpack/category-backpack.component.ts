import { Component, OnInit } from '@angular/core';
import { CategoryBackpackService } from '../category-backpack.service';

@Component({
  selector: 'app-category-backpack',
  templateUrl: './category-backpack.component.html',
  styleUrls: ['./category-backpack.component.css']
})
export class CategoryBackpackComponent implements OnInit {

  constructor(private categorybackpackService : CategoryBackpackService) { }
  categoryBackpack;
  ngOnInit() {
    this.categoryBackpack = this.categorybackpackService.getCategoryBackpack()
    .subscribe(data =>{
      this.categoryBackpack=data;
    })
  }

}
