import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from '../login.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data: any;
  user: any;

  constructor( private loginService: LoginService, private router: Router ) { }

  // récupération de la valeur des inputs

  get username() { return this.registerForm.get('username'); }

  get password() { return this.registerForm.get('password'); }

  get confirmPassword() { return this.registerForm.get('confirmPassword'); }

  registerForm: FormGroup;
  loading: boolean;
  error: string;

  // validation des mots de passe
  pwdMatchValidator(frm: FormGroup) {
    return frm.get('password').value === frm.get('confirmPassword').value ? null : {mismatch: true};
 }

  ngOnInit(): void {

    // construction du formulaire
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
         Validators.minLength(6)
        ]),
        confirmPassword: new FormControl(''),
    }, this.pwdMatchValidator);
  }

  onSubmit() {

    this.loading = true;

    this.loginService.register(this.registerForm.value).subscribe(

      // traitement de la réponse HTTP, en cas d'erreur on affiche
      // l'erreur dans la vue
       user => {
         this.user = user;
         this.loading = false;
       },
       error => {
         this.error = error;

         this.loading = false;
       }
     );
      }

}
