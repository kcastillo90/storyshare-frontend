import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular'
import { Auth0LoginComponent } from './auth0-login/auth0-login.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'storyshare-frontend'

  constructor(public auth: AuthService) {}

  loginWithRedirect(): void {
    this.auth.loginWithRedirect()
  }

  logout(): void {
    this.auth.logout({ returnTo: window.location.origin })
  }

}
