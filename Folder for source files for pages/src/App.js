import React, { useState, useEffect } from "react";
import './App.css';
import DrillLists from "./components/DrillLists";
import { getData } from "./data/data.js";

function App() {
  const [data, setData] = useState(getData());
  return (
    <div>
      <table class="table_settings">
          <thead class="drill_list_header">
              <th>Name</th>
              <th>1st Element</th>
              <th>2nd Element</th>
              <th>id</th>
          </thead>
          <DrillLists
            data={data}
          />
      <tfoot className="tfoot">
          <tr>
              <th colspan = "2"><button>Add Drill</button></th>
          </tr>
      </tfoot>
      </table>
    </div>
  );
}

export default App;
