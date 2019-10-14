import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-profilform',
  templateUrl: './profilform.component.html',
  styleUrls: ['./profilform.component.css']
})
export class ProfilformComponent implements OnInit {

  
  constructor( private userService: UserService,
               private route: ActivatedRoute, private router: Router ) {


    /**
     * ActivatedRoute permet de récuperer l'ID
     */
this.route.params.subscribe( params => this.id = params.id);

  }

  // récupération de la valeur des inputs

  get firstName() { return this.profileForm.get('firstName'); }

  get lastName() { return this.profileForm.get('lastName'); }

  get dateOfBirth() { return this.profileForm.get('dateOfBirth'); }

  get email() { return this.profileForm.get('email'); }

  get avatar() { return this.profileForm.get('avatar') ; }


  profileForm: FormGroup;
  loading: boolean;
  error: string;
  user: any;
  id: any;

  private imageSrc = '';

  ngOnInit() {

    /**
     * affichage des datas de l'utilisateur (pour test)
     */
    this.user = this.userService.getUserData()
    .subscribe(data => {
      this.user = data['user'];
    },
    error => {
      /**
       * erreur 401 indique que le jwt est expiré
       * on redirige vers le login
       */
      if (error === 401) {

        localStorage.removeItem('jwt');
        this.router.navigate(['login']);
      }

    });


      // construction du formulaire
    this.profileForm = new FormGroup({
        firstName: new FormControl('', Validators.minLength(2)),
        lastName: new FormControl('', Validators.minLength(2)),
        dateOfBirth: new FormControl('', ),
        email: new FormControl('', ),
        avatar: new FormControl('', )
      });
  }

  // conversion de l'image en base64
  onFileSelect(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    const reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    const reader = e.target;
    this.imageSrc = reader.result;
    this.profileForm.get('avatar').setValue(this.imageSrc);
  }


  onSubmit() {

    this.userService.putUser(this.profileForm.value, this.id).subscribe(

     // traitement de la réponse HTTP, en cas d'erreur on affiche
     // l'erreur dans la vue
       users => {
         console.log(users);
         this.user = users;
       },
       error => {
         this.error = error;
       }
     );

     }

}
