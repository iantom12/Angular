import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalConstants } from '../shared/global-constraints';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myForm: any = FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: [null, [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      email: [null, [Validators.required, Validators.pattern(GlobalConstants.emailRegex)]],
      phoneNumber: [null, [Validators.required, Validators.pattern(GlobalConstants.phoneNumberRegex)]],
      password: ['', [Validators.required]]
    });
  }
  // onSubmit(form: FormGroup) {
  //   console.log('Valid?', form.valid); // true or false
  //   console.log('Name', form.value.name);
  //   console.log('Email', form.value.email);
  //   console.log('Phone Number', form.value.phoneNumber);
  //   console.log('Password', form.value.password);
  // }ss
  onSubmit(){
    var formData = this.myForm.value;
    var data ={
      name: formData.name,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      password: formData.password,
    }
    console.log("Success!")
  }


}