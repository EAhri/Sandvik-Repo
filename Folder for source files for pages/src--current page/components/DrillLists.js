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
                  </tr>
              );
          });
    
    return <tbody>{buildingList}</tbody>;
};
export default DrillLists;