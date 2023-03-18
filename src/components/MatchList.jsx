import React from "react";
// import matchData from '../data/matchData' removing because I have moved it to the parent app.js
import Match from "./Match"

function MatchList (props) {
   //change the below line to add props. before matchdata[0]
   console.log("match****", props.matchData)
  const matches = props.matchData.map((match) => {
    
    return (    
     <Match
      key={match.matchNumber}
      players={match.players}
      winner={match.winner}
      scoreDifference={match.scoreDifference}
    />)
  });
 console.log("matches:", matches)
  return (
<section className="PlayerList MatchList">
    <h1>Match list</h1>
    {matches}
  </section>
  )
}

export default MatchList
