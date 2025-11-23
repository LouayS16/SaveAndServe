import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {
  stats = [
    { number: 5000, label: 'Meals Served', current: 0 },
    { number: 50, label: 'Partner Restaurants', current: 0 },
    { number: 15, label: 'Communities Reached', current: 0 }
  ];

  galleryImages = [
    {
      src: '/image1.jpg',
      caption: 'Happy families receiving nutritious meals in Tunis',
      title: 'Families Receiving Meals'
    },
    {
      src: '/image2.avif',
      caption: 'Our volunteers collecting surplus food from partner restaurants',
      title: 'Food Collection'
    },
    {
      src: '/image3.webp',
      caption: 'Distributing meals to communities in need',
      title: 'Community Distribution'
    },
    {
      src: '/image4.webp',
      caption: 'Dedicated volunteers preparing meals for distribution',
      title: 'Volunteers at Work'
    },
    {
      src: '/image5.webp',
      caption: 'Reducing food waste, one meal at a time',
      title: 'Environmental Impact'
    },
    {
      src: '/image7.jpg',
      caption: 'Celebrating milestones with our community partners',
      title: 'Celebrating Success'
    }
  ];


  ngOnInit() {
    this.animateStats();
  }

  animateStats() {
    this.stats.forEach(stat => {
      const duration = 2000;
      const increment = stat.number / (duration / 16);
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          stat.current = stat.number;
          clearInterval(timer);
        } else {
          stat.current = Math.floor(current);
        }
      }, 16);
    });
  }

  onImageLoad(event: Event) {
    const img = event.target as HTMLImageElement;
    img.classList.add('loaded');
  }
}
