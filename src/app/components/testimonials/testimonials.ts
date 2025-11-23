import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {
  testimonials = [
    {
      name: 'Fatima Ben Ali',
      role: 'Community Member, Tunis',
      image: '/profile4.webp',
      quote: 'Save\'nServe has been a blessing for my family. The fresh meals we receive help us make ends meet, and knowing that food isn\'t going to waste makes it even better.',
      rating: 5
    },
    {
      name: 'Mohamed Trabelsi',
      role: 'Restaurant Owner, Sfax',
      image: '/profile1.webp',
      quote: 'Partnering with Save\'nServe allows us to give back to our community while reducing waste. It\'s a win-win situation that aligns with our values.',
      rating: 5
    },
    {
      name: 'Amina Khelifi',
      role: 'Volunteer, Bizerte',
      image: '/profile3.webp',
      quote: 'Volunteering with Save\'nServe has been incredibly rewarding. Seeing the smiles on people\'s faces when they receive meals is priceless.',
      rating: 5
    },
    {
      name: 'Karim Jebali',
      role: 'Hotel Manager, Hammamet',
      image: '/profile2.webp',
      quote: 'Our hotel produces a lot of surplus food. Save\'nServe ensures it reaches those who need it most. Professional, reliable, and making a real difference.',
      rating: 5
    }
  ];

  onImageLoad(event: Event) {
    const img = event.target as HTMLImageElement;
    img.classList.add('loaded');
  }
}
