import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  reactiveform!: FormGroup;
  // reactiveform = new FormGroup({
  //   fullname : new FormControl(''),
  //   address : new FormControl(''),
  //   city : new FormControl(''),
  //   phone : new FormControl(''),
  //   password :new FormControl(''),
  //   confirmpassword: new FormControl('')
  // });
  constructor(private fb: FormBuilder) { }
  get fullname(){
    return this.reactiveform.get('fullname')

  }
  get email(){
    return this.reactiveform.get('email')
  }
  get address() {
    return this.reactiveform.get('address')

  }
  get city() {
    return this.reactiveform.get('city')
  }

  get phone() {
    return this.reactiveform.get('phone')

  }


  get password() {
    return this.reactiveform.get('password')

  }


  get confirmPassword() {
    return this.reactiveform.get('confirmPassword')

  }



  ngOnInit(): void {
    this.reactiveform = this.fb.group({
      fullname: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(12),
          Validators.pattern('[0-9]*'),
        ]
      ],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }
}
