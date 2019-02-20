import React, { Component } from 'react';
import './App.css';

// 2.1
const NUM_BOXES = 32;

//4.1 create box also known as the box component (this is a statelss functional component)
const Box = ({color})  => { // or just props
  const style = {
    width: '180px',
    height: '180px',
    display: 'inline-block',
    backgroundColor: color //or props.color
  }
  return <div style={style} />;
};

class App extends Component {
  
  //2.2 construct an array of 32 boxes and return a random color for each
  constructor(props) {
    super(props);
     const boxes = Array(NUM_BOXES).fill().map(this.getRandomColor, this);
     //3 create state
    this.state = {boxes};

    // 5 set interval to change random box
     setInterval(() => {
      //5.1 make copy of boxes arr
      const boxes = this.state.boxes.slice();

      //5.2 pick random index to update
      const randIndex = Math.floor(Math.random() * boxes.length);
      boxes[randIndex] = this.getRandomColor();

      //5.3 call set state
      this.setState({boxes});
    }, 300);
  
  }

// 1 define a function that will give random colors

  getRandomColor() {
    let colorIndex = Math.floor(Math.random() * this.props.allColors.length);
    return this.props.allColors[colorIndex];
  }
  
  render() {
    //4.2 map step 4 and turn it to jsx
       const boxes = this.state.boxes.map((color, index) => (
      <Box key={index} color={color} />
    ));

       //4.3 render boxes
    return (
      <div className="App">
     
          {boxes}
       
      </div>
    );
  }
}

App.defaultProps = {
  allColors: ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
              "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
              "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
              "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
              "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
              "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
              "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
              "Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
              "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
              "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
              "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
              "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
              "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
              "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
              "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
              "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
              "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
              "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
              "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
              "Yellow","YellowGreen"]
};


export default App;