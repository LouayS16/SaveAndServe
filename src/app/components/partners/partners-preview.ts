import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners-preview',
  imports: [RouterLink, CommonModule],
  templateUrl: './partners-preview.html',
  styleUrl: './partners-preview.css',
})
export class PartnersPreview {
  partners = [
    { name: 'Tunisian Restaurant Association', logo: 'fa-utensils', category: 'Restaurants' },
    { name: 'Tunis Hospitality Group', logo: 'fa-hotel', category: 'Hotels' },
    { name: 'Green Tunisia Initiative', logo: 'fa-leaf', category: 'NGO' },
    { name: 'Community Food Network', logo: 'fa-handshake', category: 'Partners' },
    { name: 'Tunis Food Bank', logo: 'fa-box', category: 'Partners' },
    { name: 'Sustainable Tunisia', logo: 'fa-recycle', category: 'NGO' }
  ];

  displayedPartners = this.partners.slice(0, 4);
}
