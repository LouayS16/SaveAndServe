import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  formData = {
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  };

  onSubmit() {
    alert(`Thank you, ${this.formData.name}! We've received your message and will get back to you soon.`);
    this.formData = {
      name: '',
      email: '',
      phone: '',
      interest: '',
      message: ''
    };
  }
}
