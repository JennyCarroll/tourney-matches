import React from "react";
// import matchData from '../data/matchData' removing because I have moved it to the parent app.js
import Match from "./Match"

function MatchList (props) {
   //change the below line to add props. before matchdata[0]
  const oneMatch = props.matchData[0];
 
  return (
<section className="PlayerList MatchList">
    <h1>Match list</h1>
    <Match players={oneMatch.players} winner={oneMatch.winner} scoreDifference={oneMatch.scoreDifference} />
  </section>
  )
}

export default MatchList
