import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MailService } from '../mail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private mailService: MailService, private router: Router) { }

  get email() { return this.mailForm.get('email'); }

  get subject() { return this.mailForm.get('subject'); }

  get msg() { return this.mailForm.get('msg'); }

  mailForm: FormGroup;

  ngOnInit(): void {

    this.mailForm = new FormGroup({
      email: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      msg: new FormControl('', Validators.required),
      recaptchaReactive: new FormControl('', Validators.required)
    })
  };

  onSubmit(mailForm) {
    let messageContainer = document.getElementById('success') as HTMLElement;
      this.mailService.sendEmail(this.mailForm.value)
      .subscribe(data => messageContainer.innerHTML = data.message);
      this.mailForm.reset();
  }
}
