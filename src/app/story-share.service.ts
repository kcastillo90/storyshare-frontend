import { Injectable } from '@angular/core'
import { Story } from "../types"

@Injectable({
  providedIn: 'root'
})
export class StoryShareService {
  // url of Story Share API
  // url = "http://localhost:3000/stories/"
  url = "https://storyshare-backend.herokuapp.com/"
  stories: Array<Story> = []

  // get stories when service is constructed
  constructor() {
    this.getStories()
  }

  // method to get stories
  async getStories() {
    const response = await fetch(this.url)
    const data = await response.json()
    this.stories = data
    return data
  }

  // method to create stories
  async createStory(story: Story) {
    await fetch(this.url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(story)
    })
  }

  // method to update stories
  async updateStory(story: Story) {
    await fetch(this.url + story._id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(story),
    })
    this.getStories()
  }

  // method to delete stories
  async DeleteStory(story: Story) {
    await fetch(this.url + story._id + "/", {
      method: "delete",
    })
    return this.getStories()
  }

}
