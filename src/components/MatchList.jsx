import React from "react";
import matchData from "../data/matchData"
import Match from "./Match"

function MatchList (props) {
  const oneMatch = matchData[0];
  return (
<section className="PlayerList MatchList">
    <h1>Match list</h1>
    <Match />
  </section>
  )
}

export default MatchList
