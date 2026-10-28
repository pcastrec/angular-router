import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { email, form, FormField, required, validate } from '@angular/forms/signals';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  imports: [FormField],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  private service = inject(AuthService)
  private router = inject(Router)

  model = signal({ email: "", password: "" })
  formulaire = form(this.model, field => {
    required(field.email), email(field.email, { message: "Email invalid" }),
    required(field.password)
  })

  error: string = ''

  submit(event: Event) {
    event.preventDefault()
    if (this.service.login(this.formulaire().value())) {
      this.router.navigate(['dashboard'])
    } else {
      this.error = 'Identifiant incorect'
    }
  }
}
