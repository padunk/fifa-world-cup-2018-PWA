// flag of nations
const FLAG = 'https://fsprdcdnpublic.azureedge.net/global-pictures/flags-fwc2018-4';

// modify github data.
export function mapAll (match, data, groupName, teams, stadiums) {
  return data.push({
    home_team: {
      name: {
        flag: `${FLAG}/${getTeam(teams, match.home_team).tri.toLowerCase()}`,
        full: getTeam(teams, match.home_team).full
      }
    },
    group: groupName,
    visitant_team: {
      name: {
        flag: `${FLAG}/${getTeam(teams, match.away_team).tri.toLowerCase()}`,
        full: getTeam(teams, match.away_team).full
      }
    },
    start_time: match.date,
    location: getLocation(stadiums, match.stadium).location,
    stadium: getLocation(stadiums, match.stadium).stadium,
    stadium_image: getLocation(stadiums, match.stadium).stadiumImage,
  });
  //return data;
}

function getTeam(teams, teamId) {
  const result = teams.filter(t => t.id === teamId);
  return {
    tri: result[0].fifaCode,
    full: result[0].name
  }
}

function getLocation(stadiums, stadiumId) {
  const result = stadiums.filter(s => s.id === stadiumId);
  return {
    location: result[0].city,
    stadium: result[0].name,
    stadiumImage: result[0].image
  }
}