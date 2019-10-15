import { Component, OnInit } from '@angular/core';
import { BackpackItemService } from '../backpack-item.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BackpackService } from '../backpack.service';
import { CategoryItemService } from '../category-item.service';

@Component({
  selector: 'app-backpack-item',
  templateUrl: './backpack-item.component.html',
  styleUrls: ['./backpack-item.component.css']
})
export class BackpackItemComponent implements OnInit {
  user: any;
  id: any;
  backpack: any;
  itemForm: FormGroup;
  error: any;
  loading: boolean;
  categories: any;
  nameItem: any;
  categoryId: any;
  form: { "name": string; "category": string; };
  constructor(private backpackItemService: BackpackItemService, private backpackService: BackpackService, private route: ActivatedRoute, private itemService: BackpackItemService, private categoryService:CategoryItemService) {
    //récupétation ID user
    this.route.params.subscribe(params => this.user = params.name);
    //récupération ID backpack
    this.route.params.subscribe(params => this.id = params.id);
  }

  //getter form
  get name() { return this.itemForm.get('name'); }
  get category() { return this.itemForm.get('category'); }


  ngOnInit() {
    /**
     * On récupére les datas user pour accéder à ses backpacks
     */
    this.backpack = this.backpackService.getBackpackById(this.id)
      .subscribe(data => {
        this.backpack = data;
        console.log('premier');
        console.log(this.backpack)
      });
      /**
       * On récupére les categories
       */
      this.categories = this.categoryService.getCategoryItem()
        .subscribe(categories =>{
          this.categories = categories;
          console.log('deuxieme');
          console.log(this.categories);
        })
    /**
     * On créé le rendu du form
     */
    this.itemForm = new FormGroup({
      name: new FormControl('', Validators.minLength(1)),
      category: new FormControl(''),
    });
  }

  //envoie du formulaire
  onSubmit() {
    this.nameItem = this.itemForm.value.name;
    this.categoryId = this.itemForm.value.category;
    this.form = {
      "name":this.nameItem,
      "category":this.categoryId
    }
    console.log(this.form);


    this.itemService.addBackpackItem(this.form, this.user, this.id).subscribe(
      
      // traitement de la réponse HTTP, en cas d'erreur on affiche
      // l'erreur dans la vue
      value => {
        this.loading = false;
        this.backpack = this.backpackService.getBackpackById(this.id)
          .subscribe(data => {
            this.backpack = data;
            console.log(this.backpack)
          });

        document.getElementById("itemForm").reset();

      },
      error => {
        this.error = error;
        console.log(error);

        this.loading = false;
      }
    );
  }
}
