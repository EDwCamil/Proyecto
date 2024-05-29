import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppHeader } from '../../components/header/header.component';
import { AppFooter } from '../../components/footer/footer.component';
import { LoginService } from '../../services/auth/login.service';
import { LoginRequest } from '../../services/auth/loginRequest';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule, AppHeader, AppFooter]
})
export class AppLogin implements OnInit {
  loginError: string = "";
  loginForm = this.formBuilder.group({
    email: ['iva@gmail.com', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })
  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService, private http: HttpClient) {

  }
  ngOnInit(): void {
  }
  get email() {
    return this.loginForm.controls.email;
  }
  get password() {
    return this.loginForm.controls.password;
  }
  login() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData) => {
          console.log(userData);
        },
        error: (errorData) => {
          console.error(errorData);
          this.loginError=errorData;
        },
        complete: () => {
          console.log("Login completo");
          this.router.navigateByUrl('');
          this.loginForm.reset();
        }
      })

    } else {
      this.loginForm.markAllAsTouched();
      alert("Error al ingresar los datos")
    }
  }
}




