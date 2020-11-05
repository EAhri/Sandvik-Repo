import React from "react";

const DrillLists = (props) => {
    const buildingList =
          props.data.map((drill) => {
              return (
                  <tr key = {drill.id}>
                        <td data-label="Name">{drill.DrillName}</td>
                        <td data-label="Element One">{drill.ElementOne}</td>
                        <td data-label="Element Two">{drill.ElementTwo}</td>
                        <td data-label="id">{drill.id}</td>
                        <td>
                            <i class="x icon"></i>
                        </td>
                  </tr>
              );
          });
    
    return ( 
      <div style={{background: "beige"}}> 
          <div> 
              <div> 
                  <h3 style={{color: "blue", float: "right", wordBreak: "break-word", width: "75px", background: "green", textAlign: "center"}}>
                    Sandvik Drill Parser
                  </h3>
              </div>
              <div>
                  <h1 style={{ color: "blue", float: "left",  textAlign: "center", background: "green"}}>
                    Drill List
                  </h1>
              </div>
        </div>
        <div style={{clear: "both"}}>
            <ul class="pagenav">
            <li><a href="#">Home</a></li>
            <li><a href="#">Drill Lists</a></li>
            </ul>
        </div>
        <div
            style={{ width: "55%" }}> 
            <table class="ui stackable single line fixed striped selectable table padded ">
                <thead>
                    <th>Name</th>
                    <th>1st Element</th>
                    <th>2nd Element</th>
                    <th>id</th>
                    <th>Actions</th>
                </thead>
                <tbody>{buildingList}</tbody>
            </table>
            <div class="ui input">
                <input type="text" placeholder="Input Drill Here"></input>
                <button>Find Ideal Drill</button>
            </div>
        </div>
      </div>
    );
};
export default DrillLists;