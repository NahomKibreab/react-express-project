import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("/days").then((res) => {
      setData(res.data);
    });
  }, []);
  const days = data && data.map((day) => <div key={day.id}>{day.name}</div>);
  return (
    <div className="App">
      {days}

      <SignIn />

      <SignUp />
    </div>
  );
}

export default App;
