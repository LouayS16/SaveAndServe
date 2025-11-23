import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-success-stories',
  imports: [CommonModule],
  templateUrl: './success-stories.html',
  styleUrl: './success-stories.css',
})
export class SuccessStories {
  stories = [
    {
      title: 'Feeding 500 Families in Tunis',
      date: 'March 2024',
      image: '/image7.jpg',
      description: 'Through our partnership with local restaurants, we successfully distributed over 2,000 meals to 500 families in need across Tunis during Ramadan.',
      metrics: {
        meals: '2,000+',
        families: '500',
        partners: '15'
      }
    },
    {
      title: 'Zero Waste Initiative in Sfax',
      date: 'February 2024',
      image: '/image8.webp',
      description: 'We launched a zero-waste program in Sfax, connecting 20 restaurants with community centers, preventing over 1,500 kg of food from going to waste.',
      metrics: {
        meals: '1,500+',
        waste: '1,500 kg',
        partners: '20'
      }
    },
    {
      title: 'Emergency Response in Bizerte',
      date: 'January 2024',
      image: '/image1.jpg',
      description: 'During severe weather conditions, we mobilized quickly to provide hot meals to 300 families affected by the crisis, working with local hotels and caterers.',
      metrics: {
        meals: '900+',
        families: '300',
        response: '24 hours'
      }
    }
  ];

  onImageLoad(event: Event) {
    const img = event.target as HTMLImageElement;
    img.classList.add('loaded');
  }
}
