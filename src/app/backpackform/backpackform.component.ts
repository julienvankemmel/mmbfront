import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';
import { BackpackService } from '../backpack.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';



@Component({
  selector: 'app-backpackform',
  templateUrl: './backpackform.component.html',
  styleUrls: ['./backpackform.component.css']
})
export class BackpackformComponent implements OnInit {

    backpackForm: FormGroup;
    items: FormArray;

    constructor(private loginService: LoginService, private userService: UserService,
                private route: ActivatedRoute, private formBuilder: FormBuilder) {
  

            // construction du formulaire
            this.backpackForm = new FormGroup({

              name: new FormControl('', Validators.minLength(2)),


              });

              
      /**
      * ActivatedRoute permet de récuperer l'ID
      */
      this.route.params.subscribe( params => this.id = params.id);
    }
  
  id: any;
  trip: any;
  user: any;
  
    ngOnInit() {

  
      /**
       * affichage des datas de l'utilisateur (pour test)
       */
      this.trip = this.userService.getUserData()
      .subscribe(data => {
      this.trip = data['user'].trip;
      this.id;
      });
        
  }

  createItem(): FormGroup {
    return this.formItem.group({

      item: new FormControl('', Validators.minLength(2)),
      
    });
  }
}
