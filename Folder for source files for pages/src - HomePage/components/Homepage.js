import React from "react";

const Homepage = () => {
  return (
    <div>
      <div style={{ padding: "10px"}}>
        <p style={{ float: "left", fontSize: "70" }}>Homepage</p> 
        <p stlye={{ float: "right"}}>Sandvik drill parser</p>
      </div>
      <div>
        <p stlye={{ float: "left" }}>Home</p>
      </div>
      <button class="ui button red"> Find ideal dril </button>
      <button class="ui button green"> Show drill list </button>
      <button class="ui button blue"> Remove drill </button>
      <button class="ui button blue"> Input drill </button>
      <button class="ui button blue"> Sign out </button>
    </div>
  );
};

export default Homepage;
