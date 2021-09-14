import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, ParamMap } from "@angular/router"
import { StoryShareService } from '../story-share.service'
import { Story } from '../../types'
import { AuthService } from '@auth0/auth0-angular'

@Component({
  selector: 'app-single-story',
  templateUrl: './single-story.component.html',
  styleUrls: ['./single-story.component.css']
})
export class SingleStoryComponent implements OnInit {
  _id: number | null = null  // var for param _id
  route                     // var for route service
  stysrv                    // var for story service
  story: Story = {          // obj to hold selected story
    title: "",
    author: "",
    synopsis: "",
    story: "",
    user: ""
  }
  router: Router            // var to hold router service

  constructor(route: ActivatedRoute, storyShareService: StoryShareService, router: Router, public auth: AuthService) {
    // assigns services to properties
    this.route = route
    this.stysrv = storyShareService
    this.router = router    // var for story service
  }

  ngOnInit(): void {
    // get the URL Param
    this.route.params.subscribe((params) => {
      // store the _id in the properties
      this._id = params["_id"]
      // find post from the service with the selected story
      const story = this.stysrv.stories.find((s) => s._id == params._id)
      // if post exists assign it to story property
      if (story) {
        this.story = story
      }
    })
  }

  // function to delete a story
  async deleteStory() {
    await this.stysrv.DeleteStory(this.story)
    this.router.navigate(["/"])
  }

}
