import React from 'react';
import './App.css';
import Post from './component/Post'
import nena from './images/nena.jpg'
import img2 from './images/like.png'
import jack from './images/jack.jpg'


const posts = [
  {
    "id": 5,
    "category": "Kultur",
    "text": "Q: How many programmers does it take to change a light bulb?\nA: None, that's a hardware problem.",
    "url": null,
    "image": null,
    "link_title": null,
    "link_description": null,
    "link_source": null,
    "likes": 1,
    "liked": true,
    "created_at": "2020-02-29 19:58:00",
    "comments": [
      {
        "id": "3",
        "author": {
          "firstname": "jack",
          "lastname": "Schmidt",
          "avatar": jack
        },
        "comment": "Haha, good one!",
        "created_at": "2020-03-01 10:32:12"
      }
    ],
    "author": {
      "id": 1,
      "firstname": "nena",
      "lastname": "",
      "avatar": nena
    }
  },
  {
    "id": 4,
    "category": "Politik",
    "text": "Who do you think is gonna be the candidate for the Democrats?",
    "url": "https://www.bbc.com/news/world-us-canada-51638341",
    "image": "https://ichef.bbci.co.uk/news/384/cpsprodpb/3876/production/_111045441_mediaitem111045440.jpg",
    "link_title": "Democratic debate: Rivals intensify attacks on Bernie Sanders",
    "link_description": "The televised showdown before South Carolina and Super Tuesday primaries was a series of messy attacks.",
    "link_source": "BBC News",
    "likes": 0,
    "liked": false,
    "created_at": "2020-02-27 16:28:31",
    "comments": [
      {
        "id": "3",
        "author": {
          "firstname": "jack",
          "lastname": "Schmidt",
          "avatar": jack
        },
        "comment": "Not sure, could be a close call between Sanders and Biden. Let's see...",
        "created_at": "2020-02-28 12:19:43"
      }
    ],
    "author": {
      "id": 1,
      "firstname": "nena",
      "lastname": "",
      "avatar": nena
    }
  },
  {
    "id": 1,
    "category": "Politik",
    "text": "This is a first test. Seems to work fine. Hooray :)",
    "url": null,
    "image": null,
    "link_title": null,
    "link_description": null,
    "link_source": null,
    "likes": 3,
    "liked": false,
    "created_at": "2020-02-27 16:27:31",
    "comments": [],
    "author": {
      "id": 1,
      "firstname": "jack",
      "lastname": "",
      "avatar": jack
    }
  }
]

const author = posts.map(i=>i.author)
const text = posts.map(i=>i.text)
const created = posts.map(i=>i.created_at)
const likes = posts.map(i=>i.likes)
const category= posts.map(i=>i.category)
const comment = posts.map(i => i.comments)

function App() {
  return (
    <div className="App">

      <Post props={author} text={text} created={created} comment={comment} likes={likes} category={category}></Post></div>

  )
}

export default App;
