import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-how-it-works-preview',
  imports: [RouterLink, CommonModule],
  templateUrl: './how-it-works-preview.html',
  styleUrl: './how-it-works-preview.css',
})
export class HowItWorksPreview {
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

  displayedSteps = this.steps.slice(0, 2);
}
