import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-how-it-works',
  imports: [CommonModule],
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.css',
})
export class HowItWorks implements OnInit {
  steps = [
    {
      number: 1,
      icon: 'fa-utensils',
      title: 'Collection',
      description: 'We collect surplus food from restaurants, hotels, and catering services that meets our quality standards.'
    },
    {
      number: 2,
      icon: 'fa-truck',
      title: 'Transportation',
      description: 'Food is safely transported in temperature-controlled vehicles to maintain freshness and safety.'
    },
    {
      number: 3,
      icon: 'fa-box',
      title: 'Distribution',
      description: 'We distribute meals to families and individuals in need across Tunisia\'s most vulnerable areas.'
    },
    {
      number: 4,
      icon: 'fa-heart',
      title: 'Impact',
      description: 'Every meal served reduces waste and brings hope to those facing food insecurity.'
    }
  ];

  ngOnInit() {
    // Trigger animations when component loads
    setTimeout(() => {
      const steps = document.querySelectorAll('.step');
      steps.forEach((step, index) => {
        setTimeout(() => {
          (step as HTMLElement).classList.add('animate-in');
        }, index * 200);
      });
    }, 100);
  }
}
