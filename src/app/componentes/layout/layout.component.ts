import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { BienvenidoComponent } from '../bienvenido/bienvenido.component';
import { LoginComponent } from '../login/login.component';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, BienvenidoComponent, LoginComponent, ErrorComponent, RouterModule, LayoutComponent ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})

export class LayoutComponent {
  loggedUser: any;
  constructor(private router: Router) {
    const localUser = localStorage.getItem('loggedUser');
    if(localUser != null) {
      this.loggedUser = JSON.parse(localUser);
    }
  }

  onLogoff() {
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/login')
  }
}