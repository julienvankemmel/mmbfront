import { Component, OnInit } from '@angular/core';
import { BackpackItemService } from '../backpack-item.service';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { BackpackService } from '../backpack.service';

@Component({
  selector: 'app-backpack-item',
  templateUrl: './backpack-item.component.html',
  styleUrls: ['./backpack-item.component.css']
})
export class BackpackItemComponent implements OnInit {
  name: any;
  id: any;
  backpack: any;
  constructor(private backpackItemService : BackpackItemService, private backpackService:BackpackService, private route: ActivatedRoute) { 
    //récupétation ID user
    this.route.params.subscribe(params => this.name = params.name);
    //récupération ID backpack
    this.route.params.subscribe(params => this.id = params.id);
  }

  
  ngOnInit() {
    /**
     * On récupére les datas user pour accéder à ses backpacks
     */
    this.backpack = this.backpackService.getBackpackById(this.id)
    .subscribe(data => {
      this.backpack = data;
      console.log(this.backpack)
    }
  )};
  
}
