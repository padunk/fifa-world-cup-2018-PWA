import * as key from './key';
import * as helpers from './helpers';

// calendar, history, etc. CONTENT?
const url = 'https://stroccoli-sebasfreetest-v1.p.mashape.com/'; 
const headers = key.HEADERS;

// match and group
const url2 = 'https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json'; 

// livescore
const url3 = 'http://livescore-api.com/api-client/scores/live.json?'; 
// key for livescore
const api_key = key.API_KEY;
const api_secret = key.API_SECRET;

export const getCalendar = () =>
  fetch(`${url}/calendar`, { headers })
  .then(response => response.json())

  // match_id given from getResult service.
export const getMatchDetails = (match_id) =>
  fetch(`${url}/details/${match_id}`, { headers })
  .then(response => response.json())

  // total cards by player fo an specific wc year
export const getPlayerCards = (year, country) =>
  fetch(`${url}/cards/${year}?country=${country}`, { headers })
  .then(response => response.json())

export const getPhotos = (match_id, player_tags) =>
  fetch(`${url}/photos/${match_id}?main_tags=${player_tags}`, { headers })
  .then(response => response.json())

  // all results for a wc given the tournament year
export const getResults = (year) =>
  fetch(`${url}/results/${year}`, { headers })
  .then(response => response.json())

  // scorers for the specific year and 3 letters country
export const getScorers = (year, country) =>
  fetch(`${url}/scorers/${year}?country=${country}`, { headers })
  .then(response => response.json())

// database from github.com
export const getGithubData = async () => {
  const res = await fetch(url2);
  return res.json();
}

export const getKnockoutData = async (knockoutStage) => {
  const result = await getGithubData();
  const stadiums = result.stadiums;
  const teams = result.teams.map(team => {
    team.flag = 'https://fsprdcdnpublic.azureedge.net/global-pictures/flags-fwc2018-4/' + team.fifaCode.toLowerCase();
    return team;
  });
  const knockout = result.knockout[knockoutStage];

  let data = knockout.matches.map(match => {
    match.home_team = teams.filter(team => team.id == match.home_team);
    match.away_team = teams.filter(team => team.id == match.away_team);
    match.stadium = stadiums.filter(s => s.id == match.stadium);
    return match;
  });

  return data;
}

export const getMatches = async (groupName) => {
  
  const result = await getGithubData();
  const stadiums = result.stadiums;
  const teams = result.teams;
  const groups = result.groups;

  let data = [];

  if(groupName === 'all') {
    Object.keys(groups).map(group => {
      return groups[group].matches.map(match => helpers.mapAll(match, data, group, teams, stadiums));
    });
  } else {
    groups[groupName.toLowerCase()].matches.map(match => helpers.mapAll(match, data, groupName, teams, stadiums));
    
  }

  return data;
};

// LIVESCORE api
export const getLiveData = async () => {
  const result = await fetch(`https://cors-anywhere.herokuapp.com/${url3}key=${api_key}&secret=${api_secret}`,
  {
    headers: {
      'Access-Control-Allow-Credentials': true
    }
  }).then(response => response.json());
  return result.data.match; // an array
}

export const byLeagueName = async () => {
  const livescoreResult = await getLiveData();
  const data = livescoreResult.filter(d => d.status === 'IN PLAY' || d.status === 'HALF TIME BREAK' || d.status === 'NOT STARTED');
  //console.log(data);
  var byLeague;

  if (data.length === 0) {
    byLeague = [];
    byLeague[0] = 'No Live Match!';
  } else {
    byLeague = data.reduce((ac, el) => {
      (ac[el.league_name] || (ac[el.league_name] = []).push(el) );
      return ac;
    }, {})
  }

  return byLeague; // an object or array
}