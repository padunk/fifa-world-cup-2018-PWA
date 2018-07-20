function group(id) {
    if (id <= 4) return 'a';
    else if (id> 4 && id <= 8) return 'b';
    else if (id> 8 && id <= 12) return 'c';
    else if (id> 12 && id <= 16) return 'd';
    else if (id> 16 && id <= 20) return 'e';
    else if (id> 20 && id <= 24) return 'f';
    else if (id> 24 && id <= 28) return 'g';
    else return 'h';
}

const add = (a, b) => a + b;

export function Team (teamData, groups) {
    this.id = teamData.id;
    this.name = teamData.name;
    this.fifaCode = teamData.fifaCode;
    this.flag = teamData.flag;
    this.group = group(this.id);
    this.games = groups[this.group].matches.filter(match => {
        return match.home_team == this.id || match.away_team == this.id;
    });
    this.played = this.games.length;
    this.win = 0;
    this.lose = 0;
    this.draw = 0;
    this.checkGame = (() => {
        this.games.forEach(match => {
            if(match.home_team == this.id) {
                if(match.home_result > match.away_result){
                    this.win++;
                }  else if (match.home_result < match.away_result) {
                    this.lose++;
                } else {
                    this.draw++;
                }
            } else {
                if(match.home_result > match.away_result){
                    this.lose++;
                }  else if (match.home_result < match.away_result) {
                    this.win++;
                } else {
                    this.draw++;
                }
            }
        });
    })();
    this.goal_for = this.games.map(match => {
        return match.home_team == this.id ? match.home_result : match.away_result;
    }).reduce(add, 0);
    this.goal_against = this.games.map(match => {
        return match.home_team == this.id ? match.away_result : match.home_result;
    }).reduce(add, 0);
    this.goal_diff = this.goal_for - this.goal_against;
    this.points = (this.win * 3) + this.draw;
}