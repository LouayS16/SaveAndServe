import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-impact',
  imports: [CommonModule],
  templateUrl: './impact.html',
  styleUrl: './impact.css',
})
export class Impact {
  impacts = [
    {
      icon: 'fa-globe',
      title: 'Environmental',
      description: 'Reducing food waste helps combat climate change and preserves valuable resources.'
    },
    {
      icon: 'fa-users',
      title: 'Social',
      description: 'Providing nutritious meals to families and individuals in need across Tunisia.'
    },
    {
      icon: 'fa-handshake',
      title: 'Community',
      description: 'Building stronger communities through partnerships and volunteer engagement.'
    }
  ];
}
