import React, { Component } from 'react';
import Navbar from './navbar';
import GuessForm from './form';
import './App.css';

class App extends Component {
      constructor(props){
        super(props);
        this.state = {
          flags: []
        }
      };


      //   this.handleNextGame = this.handleNextGame.bind(this);
      // }

      // handleNextGame()  {

      // }

      componentDidMount(){
        let countriesInfo = 'https://restcountries.eu/rest/v2/all';

        return fetch(countriesInfo)
        .then(data => data.json())
        .then(flags => this.setState({flags}))
      }



  render() {
    let show = <div>Loading...</div>
    const {flags} = this.state;
    
    if(flags && flags.length > 0) {
      
      show = flags.slice(0, 4).map(s => (
        <div key={s}>
          <img style={{height:30,width:"30"}} src={s.flag}/>
          <p>{s.name}</p>
        </div>
      ))
    }


    return (
      <div className="App">
       <Navbar/>
       
      <GuessForm onNextGame={this.handleNextGame}/>
        {show}
      </div>
    );
  }
}

export default App;

 

  
    
