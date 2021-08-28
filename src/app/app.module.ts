import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'      // need to import (and add FormsModule to imports below) for [(ngModel)] to work in forms

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AllStoriesComponent } from './all-stories/all-stories.component'
import { SingleStoryComponent } from './single-story/single-story.component'
import { StoryFormComponent } from './story-form/story-form.component'

@NgModule({
  declarations: [
    AppComponent,
    AllStoriesComponent,
    SingleStoryComponent,
    StoryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
