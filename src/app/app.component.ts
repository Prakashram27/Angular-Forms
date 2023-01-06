import { formatCurrency } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import {  NgForm } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  submitted = false;

  defaultQuestion = "Pet";
  answer='';
  genders = ['male','female']


  @ViewChild('f')
  signupform!: NgForm;

  user = {
    username : '',
    email: '',
    secretquestion: '',
    Questionanswer : '',
    gender : '',

  }

suggestedUserName(){
  const suggestedName = 'super User';

  this.signupform.form.patchValue({
    userData : {
      username : suggestedName,
    }
  })

}

  // onSubmit(form:NgForm){          // this is accessing value of input element passing local reference.
  //   console.log(form.value.email)     
  // }

  // onSubmit(){
  //   console.log(this.signupform)   // using viewChild Accessing
  //   this.signupform.
    
  // }

  onSubmit(){

    this.submitted = true;
    this.user.username = this.signupform.value.userData.username,
    this.user.email = this.signupform.value.userData.email,
    this.user.secretquestion = this.signupform.value.secret.defaultQuestion,
    this.user.Questionanswer = this.signupform.value
    this.user.gender = this.signupform.value.gender
    console.log(this.signupform)
    console.log(this.defaultQuestion)


    this.signupform.reset();
  }




}
