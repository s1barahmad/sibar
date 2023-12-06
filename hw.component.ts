import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm:FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      experienceLevel: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      // Handle form submission
      console.log(this.userForm.value);
    } else {
      // Mark all fields as touched to display validation errors
      this.userForm.markAllAsTouched();
    }
  }
}
