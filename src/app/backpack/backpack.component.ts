import { Component, OnInit } from '@angular/core';
import { BackpackService } from '../backpack.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-backpack',
  templateUrl: './backpack.component.html',
  styleUrls: ['./backpack.component.css']
})
export class BackpackComponent implements OnInit {

  constructor( private backpackService: BackpackService, private loginService: LoginService) { }
  backpack;
  user;

  ngOnInit() {

    this.backpack = this.backpackService.getBackpack()
    .subscribe(data => {
      this.backpack = data;
      console.log(data);
    });

    /**
     * affichage des datas de l'utilisateur (pour test)
     */
    this.user = this.loginService.getUserData()
    .subscribe(data => {
      this.user = data;
      console.log(data);
    });
  }

}
