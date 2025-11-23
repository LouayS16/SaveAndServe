import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {
  faqs = [
    {
      question: 'How does Save\'nServe ensure food safety?',
      answer: 'We follow strict food safety guidelines. All food is collected within safe timeframes, stored at proper temperatures, and distributed quickly. We only accept food that meets our quality standards and is still safe for consumption.',
      open: false
    },
    {
      question: 'Who can receive food from Save\'nServe?',
      answer: 'We serve families and individuals in need across Tunisia\'s most vulnerable communities. Recipients are identified through partnerships with local community organizations and verified need assessments.',
      open: false
    },
    {
      question: 'How can restaurants and hotels partner with you?',
      answer: 'Restaurants and hotels can partner with us by signing up through our contact form. We\'ll coordinate regular food pickups that fit your schedule. The process is simple, and we handle all logistics.',
      open: false
    },
    {
      question: 'Is there a cost to partner with Save\'nServe?',
      answer: 'No, there is no cost to partner with us. We provide all collection and distribution services free of charge. Our goal is to make it as easy as possible for businesses to reduce waste and help their community.',
      open: false
    },
    {
      question: 'How can I volunteer?',
      answer: 'You can sign up to volunteer through our contact form. We need help with food collection, sorting, distribution, and administrative tasks. We welcome volunteers of all backgrounds and schedules.',
      open: false
    },
    {
      question: 'How is Save\'nServe funded?',
      answer: 'We are funded through donations from individuals, businesses, and grants from organizations that support food security and environmental initiatives. All donations go directly to our operations.',
      open: false
    },
    {
      question: 'What types of food do you accept?',
      answer: 'We accept prepared meals, fresh produce, baked goods, and packaged foods that are still safe for consumption. We cannot accept food that has been served to customers or has passed expiration dates.',
      open: false
    },
    {
      question: 'How can I donate?',
      answer: 'You can donate through our contact form, and we\'ll provide you with donation options. We accept financial contributions that help us maintain our vehicles, storage facilities, and operations.',
      open: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
