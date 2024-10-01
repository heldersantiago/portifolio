import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
  navLinks: any[] = [
    {
      path: '',
      label: 'Home',
    },
    {
      path: '',
      label: 'About',
    },
    {
      path: '',
      label: 'Experience',
    },
    {
      path: '',
      label: 'Certificates',
    },
    {
      path: '',
      label: 'Skills',
    },
    {
      path: '',
      label: 'Education',
    },
    {
      path: '',
      label: 'Goals`',
    },
  ];
}
