import { Component } from '@angular/core'
import { AuthService } from '@auth0/auth0-angular'

@Component({
  selector: 'app-auth0-login',
  template: '<button (click)="auth.loginWithRedirect()">Log in</button>',
  styleUrls: ['./auth0-login.component.css']
})

export class Auth0LoginComponent {

  constructor(public auth: AuthService) {}

}
