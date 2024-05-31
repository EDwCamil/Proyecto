import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppHeader } from '../../components/header/header.component';
import { AppFooter } from '../../components/footer/footer.component';
import { LoginService } from '../../services/auth/login.service';
import { User } from '../../services/auth/user';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [AppFooter, AppHeader,RouterOutlet,RouterLink],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent implements OnInit {

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

}
