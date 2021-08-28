import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStoriesComponent } from './all-stories/all-stories.component'
import { SingleStoryComponent } from './single-story/single-story.component'
import { StoryFormComponent } from './story-form/story-form.component'


const routes: Routes = [
  { path: "story/:id", component: SingleStoryComponent },
  { path: "new", component: StoryFormComponent },
  { path: "edit/:id", component: StoryFormComponent },
  { path: "", component: AllStoriesComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
