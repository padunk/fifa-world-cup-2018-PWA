import React from 'react';
// import isEmpty from 'lodash/isEmpty';

// import { byLeagueName } from '../utils/api';
// import { live_mock } from '../utils/mock';

import './live.css';

// add export to export this component if paid LIVESCORE api
// export class Live extends Component {
//   constructor() {
//     super();

//     this.state = {
//       liveData: {},
//     }
//   }

//   componentDidMount() {
//     this.getMatches();
//     // const data = live_mock.filter(data => data.status === 'IN PLAY');
//     // if (data.length === 0) {data[0] = 'No Live Match!';}
//     // this.setState({ liveData: data });
//   }

//   getMatches = () => {
//     byLeagueName().then(data => {
//       this.setState({ liveData: data });
//     });
//   }

//   refresh = () => {
//     window.location.reload(true);
//   }

//   renderLiveMatch = () => {
//     const { liveData } = this.state;

//     return Object.keys(liveData).map(leagueName => {
//       return (
//         <div key={leagueName} className="live-match-div">
//           { leagueName !== "null"
//           ? <div className="live-match-league">
//               <p>{leagueName}</p>
//             </div>
//           : null
//           }
//           <LiveMatchBody matches={liveData[leagueName]} />
//         </div>
//       );
//     });
//   }

//   render() {
//     const { liveData } = this.state;
    
//     if (isEmpty(liveData)) {
//       return <div>Loading...</div>;
//     } else if (liveData.length === 1 && typeof(liveData[0]) === 'string' ) {
//       return <div style={{ margin: '1em', fontFamily: 'Dusha, serif', fontSize: '4em'}}>{liveData[0]}</div>
//     } else {
//       return (
//         <div className="live-match-main">
//           <button onClick={this.refresh} className="live-match-refresh-button">Refresh</button>
//           {this.renderLiveMatch()}
//         </div>
//       );
//     }
//   }
// }

// function LiveMatchBody(props) {
//   return (
//     props.matches.map(match => {
//       return (
//         <div className="live-match-body" key={match.id}>
//         <div className="live-match-time">
//           <p>{match.time.length <= 3 && match.time !== 'HT' ? `${match.time}'` : match.time}</p>
//         </div>
        
//         <div className="live-match-teams">
//           <span className="live-match-home">{match.home_name}</span>
//           <span className="live-match-home-score">{match.score.indexOf("?") > -1 ? '0' : match.score.slice(0, 1)}</span>
//           <span className="live-match-away-score">{match.score.indexOf("?") > -1 ? '0' : match.score.slice(-1)}</span>
//           <span className="live-match-away">{match.away_name}</span>
//         </div>
//         </div>
//       );
//     })
//   );
// }

export function Live() {
  return (
    <div className="goal-serve">
      <iframe 
        className="goal-serve-iframe"
        src='http://www.goalserve.com/updaters/soccerupdate.aspx' 
        width="700" 
        height="1500"
        title="goalServeLiveAPI"
        style={{ border: 'none', margin: '0', overflow: 'auto' }}
        >
      </iframe>
    </div>
  );
}