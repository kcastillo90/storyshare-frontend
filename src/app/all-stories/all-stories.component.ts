import { Component, OnInit } from '@angular/core'
import { StoryShareService } from '../story-share.service'

@Component({
  selector: 'app-all-stories',
  templateUrl: './all-stories.component.html',
  styleUrls: ['./all-stories.component.css']
})
export class AllStoriesComponent implements OnInit {
  // property to receive StoryshareService
  stysrv: StoryShareService

  constructor(storyShareService: StoryShareService) {
    // Assigns the service as aproperty of the component
    this.stysrv = storyShareService
  }

  ngOnInit(): void {
    // grabs the story on component initialization
    this.stysrv.getStories()
  }

}
