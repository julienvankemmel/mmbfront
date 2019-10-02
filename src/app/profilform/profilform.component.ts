import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profilform',
  templateUrl: './profilform.component.html',
  styleUrls: ['./profilform.component.css']
})
export class ProfilformComponent implements OnInit {

  constructor( private loginService: LoginService, private userService: UserService,
               private route: ActivatedRoute ) {


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
    this.user = this.loginService.getUserData()
    /*
    .subscribe(data => {
      this.user = data.user;
    });
    */

      // construction du formulaire
    this.profileForm = new FormGroup({
        firstName: new FormControl('', Validators.minLength(2)),
        lastName: new FormControl('', Validators.minLength(2)),
        dateOfBirth: new FormControl('', ),
        email: new FormControl('', ),
        avatar: new FormControl('', )
      });
  }

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
    console.log(this.imageSrc);
    this.profileForm.get('avatar').setValue(this.imageSrc);
  }


  onSubmit() {

   /* const uploadData = new FormData();

    uploadData.append('firstName', this.firstName.value);
    uploadData.append('lastName', this.lastName.value);
    uploadData.append('dateOfBirth', this.dateOfBirth.value);
    uploadData.append('email', this.email.value);
    uploadData.append('avatar', this.selectedFile);*/

    this.userService.putUser(this.profileForm.value, this.id).subscribe(

     // traitement de la réponse HTTP, en cas d'erreur on affiche
     // l'erreur dans la vue
       users => {
         console.log(this.profileForm.value);

          // redirection
        //  this.router.navigate(['']);
       },
       error => {
         this.error = error;

       }
     );

     }

}
