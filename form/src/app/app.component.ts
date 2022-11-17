import { NonNullAssert } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalConstants } from 'src/shared/global-constraints';

interface userdetails {
  username: FormControl<string>,
  email: FormControl<string>,
  phone: FormControl<number>,
  password: FormControl<string>
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Sign Up';

  loginform = new FormGroup(
    {
      username: new FormControl<string>('', [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]),
      email: new FormControl<string>('', [Validators.required, Validators.pattern(GlobalConstants.emailRegex)]),
      password: new FormControl<number | string>('', Validators.required),
      phone: new FormControl<string>('',[Validators.required, Validators.pattern(GlobalConstants.phoneNumberRegex)])
    }
  )

  get email() {
    return this.loginform.get('email')
  }

  get username() {
    return this.loginform.get('username')
  }

  get phone() {
    return this.loginform.get('phone')
  }

  get password(){
    return this.loginform.get('password')
  }
  onSubmit(){
    var formData = this.loginform.value;
    var data ={
      name: formData.username,
      email: formData.email,
      phoneNumber: formData.phone,
      password: formData.password,
    }
    console.log("Success!")
  }


  submit(e:Event){
    e.preventDefault()
  }
}