import React, { useState, useEffect } from 'react';
import './App.css';
import Title from './Title';
import Arrows from './Images/Up_Down_Arrows.png';
import { getData } from "./Data/data.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [data, setData] = useState(getData());
  const [NameParser, setNameParser] = useState({
      Name: data[0].DrillName,
      Index: 0,
  });

  function incrementName()
  {
      var i = NameParser['Index'];
      if(i === data.length - 1)
      { i = 0; }
      else
      { i++; }
      setNameParser({Name: data[i].DrillName, Index: i})
  }

  function decrementName()
  {
      var i = NameParser['Index'];
      if(i === 0)
      { i = data.length - 1; }
      else
      { i--; }
      setNameParser({Name: data[i].DrillName, Index: i})
  }
    
    
  return (
    <div id="container">
      <div className="PinkTop">{/*This just adds the background on the top making the whole line pink*/}</div>
      <img src={Arrows} className="Arrows">{/* Add the up and down arrows*/}</img>
      <div className="TopArrowButton" onClick={() => incrementName()} >{/* This adds a clickable invisible box for making the top arrow work */}</div>
      <div className="BottomArrowButton" onClick={() => decrementName()}>{/* This adds a clickable invisible box for making the bottom arrow work */}</div>
      <h1 className="Header">Drill Name: </h1>
      <h1 className="DrillName">{NameParser['Name']}</h1>
      <div className="ElementOne">Element One: {data[NameParser['Index']].ElementOne}</div>
      <div className="ElementTwo">Element Two: {data[NameParser['Index']].ElementTwo}</div>
      <Title>{/* Adds the Sandvik Drill Parser to the top right*/}</Title>
      <div className="Footer">
          <div className="ReturnHomeButton">Return Home</div> {/* Note: Add onClick() => returnHome() to add a button here*/}
              <div className="PrintPageButton">Print Page</div>
      </div>
    </div>
    
  );
}

export default App;
