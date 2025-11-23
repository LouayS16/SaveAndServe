import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  imports: [FormsModule],
  templateUrl: './newsletter.html',
  styleUrl: './newsletter.css',
})
export class Newsletter {
  newsletterEmail = '';

  subscribeNewsletter() {
    if (this.newsletterEmail) {
      alert(`Thank you for subscribing! We'll send updates to ${this.newsletterEmail}`);
      this.newsletterEmail = '';
    }
  }
}
