import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStoriesComponent } from './all-stories/all-stories.component'
import { SingleStoryComponent } from './single-story/single-story.component'
import { StoryFormComponent } from './story-form/story-form.component'
import { Auth0LoginComponent } from './auth0-login/auth0-login.component'


const routes: Routes = [
  { path: "story/:_id", component: SingleStoryComponent },
  { path: "new", component: StoryFormComponent },
  { path: "edit/:_id", component: StoryFormComponent },
  { path: "", component: AllStoriesComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
