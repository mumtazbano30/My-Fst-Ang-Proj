import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  contactForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      gender: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
    });
  }


  public sendEmail(params: any) {
    emailjs
      .send('service_qbeq1id', 'template_d37bkw6', params, 'GbaQxc_ppEIbcc2h8')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert('Email sent successfully!');
          //reset
        this.contactForm.reset();
        this.successMessage = 'Email sent successfully.';
        this.errorMessage = null;
      })
      .catch((error) => {
        console.log(error.text);
        alert('Error sending email: ' + error.text);
        this.errorMessage = 'Error sending email: ' + error.text;
        this.successMessage = null;
      });
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      const params = {
        name: formData.name,
        email: formData.email,
        contactNumber: formData.contactNumber,
        gender: formData.gender,
        address: formData.address,
      };

      // Send the email with the updated params
      this.sendEmail(params);
    } else {
      this.markFormGroupTouched(this.contactForm);
    }
  }
}







