import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { HowItWorks } from './components/how-it-works/how-it-works';
import { Impact } from './components/impact/impact';
import { Contact } from './components/contact/contact';
import { Testimonials } from './components/testimonials/testimonials';
import { Partners } from './components/partners/partners';
import { Faq } from './components/faq/faq';
import { SuccessStories } from './components/success-stories/success-stories';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Save\'nServe - Less Waste, More Taste'
  },
  {
    path: 'about',
    component: About,
    title: 'About - Save\'nServe'
  },
  {
    path: 'how-it-works',
    component: HowItWorks,
    title: 'How It Works - Save\'nServe'
  },
  {
    path: 'impact',
    component: Impact,
    title: 'Impact - Save\'nServe'
  },
  {
    path: 'contact',
    component: Contact,
    title: 'Contact - Save\'nServe'
  },
  {
    path: 'testimonials',
    component: Testimonials,
    title: 'Testimonials - Save\'nServe'
  },
  {
    path: 'partners',
    component: Partners,
    title: 'Partners - Save\'nServe'
  },
  {
    path: 'faq',
    component: Faq,
    title: 'FAQ - Save\'nServe'
  },
  {
    path: 'success-stories',
    component: SuccessStories,
    title: 'Success Stories - Save\'nServe'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
