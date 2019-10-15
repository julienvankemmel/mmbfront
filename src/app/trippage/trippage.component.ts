import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';
<<<<<<< HEAD
import { ActivatedRoute, Router } from '@angular/router';
=======
import { ActivatedRoute } from '@angular/router';
import { TripService } from '../trip.service';
>>>>>>> da7ba917e9edd3af6bee9b246d22dc9b667a6248


@Component({
  selector: 'app-trippage',
  templateUrl: './trippage.component.html',
  styleUrls: ['./trippage.component.css']
})
export class TrippageComponent implements OnInit {

  constructor( private loginService: LoginService, private userService: UserService,
<<<<<<< HEAD
               private route: ActivatedRoute, private router: Router ) {
=======
    private route: ActivatedRoute, private tripService: TripService) {
>>>>>>> da7ba917e9edd3af6bee9b246d22dc9b667a6248
      this.route.params.subscribe( params => this.id = params.id);
    }





  profileForm: FormGroup;
  loading: boolean;
  error: string;
  trip: any;
  id: any;

  private imageSrc = '';


/**
 * affichage des datas de l'utilisateur (pour test)
 */
this.trip = this.userService.getUserData()
.subscribe(data => {

this.trip = data['user'].trip;

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

        this.id;
      });

    // construction du formulaire
    this.profileForm = new FormGroup({
      firstName: new FormControl('', Validators.minLength(2)),
      lastName: new FormControl('', Validators.minLength(2)),
      dateOfBirth: new FormControl(''),
      email: new FormControl(''),
      avatar: new FormControl('')
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



deleteTrip(id){
  this.tripService.deleteTrip(id).subscribe(
    value=>{
      this.trip = this.userService.getUserData()
      .subscribe(data => {
      this.trip = data['user'].trip;
    
      this.id;
      });
    
    
  
    });

}

}
