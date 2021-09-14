import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'      // need to import (and add FormsModule to imports below) for [(ngModel)] to work in forms
import { HttpModule } from '@angular/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AllStoriesComponent } from './all-stories/all-stories.component'
import { SingleStoryComponent } from './single-story/single-story.component'
import { StoryFormComponent } from './story-form/story-form.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AuthModule } from '@auth0/auth0-angular';
import { Auth0LoginComponent } from './auth0-login/auth0-login.component'

@NgModule({
  declarations: [
    AppComponent,
    AllStoriesComponent,
    SingleStoryComponent,
    StoryFormComponent,
    Auth0LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    NgbModule,
    AuthModule.forRoot({
      domain: 'dev-36j8m5oo.us.auth0.com',
      clientId: 'FLhw4sPMAAY6pXfNtWlmQPtayuJcQHCb'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
