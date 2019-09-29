import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  get search() { return this.searchForm.get('search'); }

  searchForm: FormGroup;

  ngOnInit(): void {

    this.searchForm = new FormGroup({
      search: new FormControl(),
    })
  };

  onSubmit(searchForm) {
    this.router.navigate(['/backpack/'+this.searchForm.value.search])
  }

}
