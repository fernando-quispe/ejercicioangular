import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ErrorComponent } from '../error/error.component';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-bienvenido',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, BienvenidoComponent, LoginComponent, ErrorComponent, RouterModule, LayoutComponent],
  templateUrl: './bienvenido.component.html',
  styleUrl: './bienvenido.component.css'
})
export class BienvenidoComponent {
}