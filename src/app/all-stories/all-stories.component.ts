import { Component, OnInit } from '@angular/core'
import { StoryShareService } from '../story-share.service'
import { AuthService } from '@auth0/auth0-angular'

@Component({
  selector: 'app-all-stories',
  templateUrl: './all-stories.component.html',
  styleUrls: ['./all-stories.component.css']
})
export class AllStoriesComponent implements OnInit {
  // property to receive StoryshareService
  stysrv: StoryShareService

  constructor(storyShareService: StoryShareService, public auth: AuthService) {
    // Assigns the service as a property of the component
    this.stysrv = storyShareService
  }

  ngOnInit(): void {
    // grabs the story on component initialization
    this.stysrv.getStories()
  }

}
