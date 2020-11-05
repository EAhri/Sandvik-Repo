import React, { useState, useEffect } from "react";
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import DrillLists from "./components/DrillLists";
import { getData } from "./data/data.js";

function App() {
  const [data, setData] = useState(getData());
  return (
    <div>
      <DrillLists
        data={data}
      />
    </div>
  );
}

export default App;
