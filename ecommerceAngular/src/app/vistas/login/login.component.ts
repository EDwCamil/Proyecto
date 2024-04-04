import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class AppLogin implements OnInit {
  constructor(){

  }
  ngOnInit(): void {
    console.log('entre a mi login')
  }
}
