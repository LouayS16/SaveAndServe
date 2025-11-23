import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Testimonials } from '../testimonials/testimonials';
import { PartnersPreview } from '../partners/partners-preview';
import { SuccessStories } from '../success-stories/success-stories';
import { Newsletter } from '../newsletter/newsletter';
import { AboutPreview } from '../about/about-preview';
import { HowItWorksPreview } from '../how-it-works/how-it-works-preview';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink, 
    Testimonials, 
    PartnersPreview, 
    SuccessStories, 
    Newsletter,
    AboutPreview,
    HowItWorksPreview
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
}
