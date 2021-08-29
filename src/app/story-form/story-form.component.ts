import { Component, OnInit } from '@angular/core'
import { StoryShareService } from '../story-share.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrls: ['./story-form.component.css']
})
export class StoryFormComponent implements OnInit {
  title: string = ""                       // var for title form field
  author: string = ""                      // var for author form field
  story: string = ""                       // var for story form field
  stysrv: StoryShareService                // var for story service
  route: ActivatedRoute                    // var for route service
  _id: number | null | undefined = null     // var for edited story if editing
  buttonLabel = "Publish Story"
  router: Router                           // var for router service
  constructor(storyShareService: StoryShareService, route: ActivatedRoute, router: Router) {
    this.stysrv = storyShareService
    this.route = route
    this.router = router
  }

  // checks to see if story needs to be edited by looking for an _id
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      // fetch story from storyShareService if there is an _id in url
      const story = this.stysrv.stories.find((s) => s._id == params["_id"])
      if(story) {
        this.title = story.title
        this.author = story.author
        this.story = story.story
        this._id = story._id
        this.buttonLabel = "Submit Edits"
      }
    })
  }

  async handleSubmit() {
    // if there is an _id, edit the story, if not, create a new story:
    if(this._id) {
      //  update the story with the form data
      console.log(this._id)
      this.stysrv.updateStory({
        _id: this._id,
        title: this.title,
        author: this.author,
        story: this.story
      })
    } else {
    // create the story with the form data
    console.log("posting new story")
    this.stysrv.createStory({
      title: this.title,
      author: this.author,
      story: this.story
    })
    }
    // send back to main page
    this.router.navigate(["/"])
  }
}
