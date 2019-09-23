import { Component, OnInit } from '@angular/core';
import { BackpackService } from '../backpack.service';
<<<<<<< HEAD
import { UserService } from '../user.service';
=======
import { LoginService } from '../login.service';
>>>>>>> a643930319fe4c3e65b1d756982ce91794b176aa

@Component({
  selector: 'app-backpack',
  templateUrl: './backpack.component.html',
  styleUrls: ['./backpack.component.css']
})
export class BackpackComponent implements OnInit {

<<<<<<< HEAD
  constructor( private backpackService: BackpackService, private userService: UserService) { }
=======
  constructor( private backpackService: BackpackService, private loginService: LoginService) { }
>>>>>>> a643930319fe4c3e65b1d756982ce91794b176aa
  backpack;
  user;

  ngOnInit() {

    this.backpack = this.backpackService.getBackpack()
    .subscribe(data => {
      this.backpack = data;
      console.log(data);
    });

    /**
<<<<<<< HEAD
     * affichage des datas de l'utilisateur
     */
    this.user = this.userService.getUserData()
=======
     * affichage des datas de l'utilisateur (pour test)
     */
    this.user = this.loginService.getUserData()
>>>>>>> a643930319fe4c3e65b1d756982ce91794b176aa
    .subscribe(data => {
      this.user = data;
      console.log(data);
    });
  }

}
