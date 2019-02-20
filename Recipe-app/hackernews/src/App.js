import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [] //default state
    };
  }

  componentDidMount() {
    const topStories = "https://hacker-news.firebaseio.com/v0/topstories.json";
    const storyUrl   = "https://hacker-news.firebaseio.com/v0/item/";

    fetch(topStories)
      .then(data => data.json()) //turn resut to json
      //then retuns a promise so add another .then bcos of promise chaining
      //the result of this req is an arr of ids n story ids so we map d arr n mk nu gt req 4 each arr
      .then(data => data.map(id => {
        //creating full url
        const url = `${storyUrl}${id}.json`
        //since each req requires to b converted to json a .then will b added
        return fetch(url)
          .then(d => d.json()) 
      }).slice(0, 15))  
      //use promise chaining to tk d arr n pass it to a promise.all
      .then(promises => Promise.all(promises))
      //once those arr av bin resolved we get our arr of stories
      .then(stories => this.setState({stories}))
  }

  render() {
    //map the stories
    let views = <div>Loading...</div>
    const {stories} = this.state;
    if(stories && stories.length > 0) {
      views = stories.map(s => (
        <p key={s.id}>
          <a href={s.url}>{s.title}</a> from <strong>{s.by}</strong>
        </p>
      ))
    }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hackenews Top Stories</h1>
        </header>
        {views}
      </div>
    );
  }
}

export default App;
