import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-profilform',
  templateUrl: './profilform.component.html',
  styleUrls: ['./profilform.component.css']
})
export class ProfilformComponent implements OnInit {

  registerForm: FormGroup;
  loading: boolean;
  error: string;

  constructor() { }

  ngOnInit() {
  }

}
