import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule,FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class AppLogin implements OnInit {


  get email(){
    return this.formUser.get('email') as FormControl;
  }

  get password(){
    return this.formUser.get('password') as FormControl;
  }

  formUser = new FormGroup ({
    'email' : new FormControl ('',[Validators.required, Validators.email]),
    'password' : new FormControl('', Validators.required)

  });
 
  

  constructor(){

  }
  ngOnInit(): void {
    console.log('entre a mi login')
  }
}

