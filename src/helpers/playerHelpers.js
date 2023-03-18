export const preparePlayerData = (playerData) => {
  // convert playerData from an object to an array
  const playerDataArray = Object.values(playerData);
  return playerDataArray;
};

// add a wins key to every player
// input: playerDataArray, matchData
export const addWinsToPlayers = (playerDataArray, matchData) => {
  return playerDataArray.map((player) => {
    // Calculating the number of wins in the matchData
    const currentWins = matchData.reduce((accumulator, match) => {
      // Adds a win if the gamerTag matches
      if (match.winner === player.gamerTag) {
        return (accumulator += 1);
      } else {
        return accumulator;
      }
    }, 0);

    // Assigns the value to the wins key
    player.wins = currentWins;

    return player;
  });
};
// output: [{player}, {player}] (each player having a win key and a numerical value)
