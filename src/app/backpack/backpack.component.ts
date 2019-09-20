import { Component, OnInit } from '@angular/core';
import { BackpackService } from '../backpack.service';

@Component({
  selector: 'app-backpack',
  templateUrl: './backpack.component.html',
  styleUrls: ['./backpack.component.css']
})
export class BackpackComponent implements OnInit {

  constructor(private backpackService : BackpackService) { }
  backpack;
  ngOnInit() {
    this.backpack = this.backpackService.getBackpack()
    .subscribe(data =>{
      this.backpack=data;
    })
  }

}
