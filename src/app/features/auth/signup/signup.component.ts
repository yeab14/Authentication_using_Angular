import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import form-related modules

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup = new FormGroup({}); // Initialize with an empty FormGroup

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    // Initialize the signupForm with form controls
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // Method to handle form submission
  signup() {
    if (this.signupForm.valid) {
      // Perform signup operation
      console.log(this.signupForm.value);
    } else {
      // Handle form validation errors
      console.log('Form validation failed.');
    }
  }
}

