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

// HOME funfact.js
export function countWords(sentence) {
	var count = 0;
  for (let i = 0, n = sentence.length; i < n; i++) {
    sentence[i] === " " ? count ++ : count += 0;
  }
  
	return count += 1;
}

// GROUPS grouplist.js
export function addGroupProperties(teams) {
  var groupName = 65; // ascii code for "A"

  for (let i = 0, n = teams.length; i < n; i++) {
    if (teams[i].id % 4 === 0) {
      teams[i].group = String.fromCharCode(groupName);
      groupName ++;
    } else {
      teams[i].group = String.fromCharCode(groupName);
    }
  }

  return teams;
}

// groupcard.js
export function sortGroupStanding(a, b) {
  if (a.points == b.points) {
    if (a.goal_diff == b.goal_diff) {
      if (a.goal_for == b.goal_for) {
        // check groups.winner
        // meanwhile harcode this one for senegal and japan
        return a.name > b.name;
      } else {
        return a.goal_for < b.goal_for;
      }
    } else {
      return a.goal_diff < b.goal_diff;
    }
  } else {
    return a.points < b.points;
  }
}

// knockout.js
export function alter(textRound) {
  switch(textRound) {
      case 'round_16':
          return 'Round of 16';
      case 'round_8':
          return 'Quarter Finals';
      case 'round_4':
          return 'Semi Finals';
      case 'round_2_loser':
          return 'Third Place Playoff';
      default:
          return 'Finals';
  }
}