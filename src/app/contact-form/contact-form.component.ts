import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
// [x: string]: any;
  contactForm!: FormGroup;
// contact: any;

  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.pattern(/^[^0-9].*$/)]],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      gender: ['', [Validators.required]],
      address: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]]
    });
  }
 

  onSubmit() {
    if (this.contactForm.valid) {
      const fullName = this.contactForm.get('fullName')?.value;
      const email = this.contactForm.get('email')?.value;
      const contactNumber = this.contactForm.get('contactNumber')?.value;
      const gender = this.contactForm.get('gender')?.value;
      const address = this.contactForm.get('address')?.value;
  
      const responseMessage = `
        Full Name: ${fullName}
        Email: ${email}
        Contact Number: ${contactNumber}
        Gender: ${gender}
        Address: ${address}
      `;
  
      alert(responseMessage);
      alert('Thanks For contact us.');
  
      // Reset the form
      this.contactForm.reset();
    } else {
      // If the form is invalid, display validation messages
      this.markFormGroupTouched(this.contactForm);
    }
  }
  
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  
}
