import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { User } from '../../services/auth/user';
import { LoginService } from '../../services/auth/login.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class AppHeader implements OnInit {
  userLoginOn: boolean = false;
  userData?: User;

  constructor(private loginService: LoginService) { }
  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe(
      {
        next: (userLoginOn) => {
          this.userLoginOn = userLoginOn;
        }
      });

    this.loginService.currentUserData.subscribe({
      next: (userData) => {
        this.userData = userData;
      }
    });
  }
  title = 'ecommerceAngular';
}
