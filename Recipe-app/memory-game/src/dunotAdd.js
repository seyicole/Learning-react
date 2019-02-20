import React, { Component } from 'react';
import Navbar from './navbar';
import Card from './Card';

const Box = ({card})  => { // or just props
  const style = {
    width: '160px',
    height: '160px',
    display: 'inline-block',
    borderRadius: '25px',
    backgroundColor: card.backgroundColor
  }
  return <div style={style} />;
};

//const TodoItem = ({text}) => (
//   <li>{text}</li>
// );

class App extends Component {
  constructor(props) {
    super(props);
    const CardState = {
      HIDING: 1,
      SHOWING: 2,
      MATCHING: 3
    };

    // callFunc (){
    //     if(this.state.CardState.HIDING){
    //       this.setState(CardState.SHOWING)
    //     }
    //     else {
    //       this.setState(CardState.MATCHING)
    //     }
    // }



    let cards = [
        {id: 0, cardState: CardState.HIDING, backgroundColor: 'red'},
      {id: 1, cardState: CardState.HIDING, backgroundColor: 'red'},
      {id: 2, cardState: CardState.HIDING, backgroundColor: 'navy'},
      {id: 3, cardState: CardState.HIDING, backgroundColor: 'navy'},
      {id: 4, cardState: CardState.HIDING, backgroundColor: 'green'},
      {id: 5, cardState: CardState.HIDING, backgroundColor: 'green'},
      {id: 6, cardState: CardState.HIDING, backgroundColor: 'yellow'},
      {id: 7, cardState: CardState.HIDING, backgroundColor: 'yellow'},
      {id: 8, cardState: CardState.HIDING, backgroundColor: 'black'},
      {id: 9, cardState: CardState.HIDING, backgroundColor: 'black'},
      {id: 10, cardState: CardState.HIDING, backgroundColor: 'purple'},
      {id: 11, cardState: CardState.HIDING, backgroundColor: 'purple'},
      {id: 12, cardState: CardState.HIDING, backgroundColor: 'pink'},
      {id: 13, cardState: CardState.HIDING, backgroundColor: 'pink'},
      {id: 14, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'},
      {id: 15, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'}
    ];

      function shuffle(array) {
          var currentIndex = array.length, temporaryValue, randomIndex;

          // While there remain elements to shuffle...
              while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }

        return array;
      }

    this.state = {
      cards: shuffle(cards)
    }  
  }
  render() {
             const cards = this.state.cards.map((card) => (
      <Box key={card.id} card={card} />
    ));

    return (
     
      <div className="App">
       <Navbar/>
       
       
          {cards}
       

      </div>
    );
  }
}

export default App;

