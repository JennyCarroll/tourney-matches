import React from "react"
// import playerData from '../data/playerData' removing because I have moved it to the parent app.js
// import matchData from '../data/matchData' removing because I have moved it to the parent app.js
import Player from "./Player"
import { preparePlayerData, addWinsToPlayers } from '../helpers/playerHelpers'

function PlayerList(props) {  

  const players = props.playerData.map(player => {
    return (
    <Player
      key={player.gamerTag}
      gamerTag={player.gamerTag} 
      firstName={player.firstName} 
      lastName={player.lastName} 
      wins={player.wins} />)
  });
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {players}
    </section>
  );
}


export default PlayerList
