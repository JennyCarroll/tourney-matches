import React from "react"
// import playerData from '../data/playerData' removing because I have moved it to the parent app.js
// import matchData from '../data/matchData' removing because I have moved it to the parent app.js
import Player from "./Player"
import { preparePlayerData, addWinsToPlayers } from '../helpers/playerHelpers'

function PlayerList (props) {
  const onePlayer = props.playerData[0]
  return (
<section className="PlayerList">
  <h1>Current participating players</h1>
  <Player gamerTag={onePlayer.gamerTag} firstName={onePlayer.firstName} lastName={onePlayer.lastName} wins={onePlayer.wins} />
</section>
  )
}


export default PlayerList
