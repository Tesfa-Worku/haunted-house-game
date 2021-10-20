import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import RoomData from "./components/RoomData.js";
import EventsData from "./components/EventsData";
import StartGame from "./components/StartGame";
import Hallway from "./components/Hallway";
import Room from "./components/Room";
import GameWon from "./components/GameWon";
import GameOver from "./components/GameOver";

function App() {
  const rooms = RoomData;
  const events = EventsData;
  const [audioOn, setAudioOn] = useState(true);

  return (
    <BrowserRouter>
      <Audio onLoaded={(controls) => setAudioControls(controls)} />
      <Switch>
        <Route exact path="/">
          <StartGame audioControls={audioControls}/>
        </Route>
        <Route path="/startgame/:page">
          <StartGame />
        </Route>
        <Route path="/hallway/:page">
          <Hallway />
        </Route>
        <Route exact path="/hallway">
          <Hallway rooms={rooms} />
        </Route>
        <Route path="/room/:name">
          <Room rooms={rooms} events={events} />
        </Route>
        <Route path="/gamewon">
          <GameWon />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
