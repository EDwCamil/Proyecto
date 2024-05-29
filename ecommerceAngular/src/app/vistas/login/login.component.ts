import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppHeader } from '../../components/header/header.component';
import { AppFooter } from '../../components/footer/footer.component';



@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule, AppHeader, AppFooter]
})
export class AppLogin implements OnInit {
  loginForm = this.formBuilder.group({
    email: ['iva@gmail.com'],
    password: ['']
  })
  constructor(private formBuilder: FormBuilder){

  }
  ngOnInit(): void {
    console.log('entre a mi login')
  }
}




