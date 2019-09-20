import { Component, OnInit } from '@angular/core';
import { BackpackItemService } from '../backpack-item.service';

@Component({
  selector: 'app-backpack-item',
  templateUrl: './backpack-item.component.html',
  styleUrls: ['./backpack-item.component.css']
})
export class BackpackItemComponent implements OnInit {

  constructor(private backpackItemService : BackpackItemService) { }
  backpackItem;
  ngOnInit() {
    this.backpackItem = this.backpackItemService.getBackpackItem()
    .subscribe(data =>{
      this.backpackItem=data;
    })
  }
  
}
