import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-partners',
  imports: [CommonModule, RouterLink],
  templateUrl: './partners.html',
  styleUrl: './partners.css',
})
export class Partners {
  partners = [
    { name: 'Tunisian Restaurant Association', logo: 'fa-utensils', category: 'Restaurants' },
    { name: 'Tunis Hospitality Group', logo: 'fa-hotel', category: 'Hotels' },
    { name: 'Green Tunisia Initiative', logo: 'fa-leaf', category: 'NGO' },
    { name: 'Community Food Network', logo: 'fa-handshake', category: 'Partners' },
    { name: 'Tunis Food Bank', logo: 'fa-box', category: 'Partners' },
    { name: 'Sustainable Tunisia', logo: 'fa-recycle', category: 'NGO' }
  ];

  categories = ['All', 'Restaurants', 'Hotels', 'NGO', 'Partners'];
  selectedCategory = 'All';

  get filteredPartners() {
    if (this.selectedCategory === 'All') {
      return this.partners;
    }
    return this.partners.filter(p => p.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
