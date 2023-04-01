import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../league/StandingsTable.css';

const TodayMatches = ({dateFromProp,dateToProp}) => {
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // add leading zero if needed
  const day = String(today.getDate()).padStart(2, '0'); // add leading zero if needed

  const dateFrom = `${year}-${month}-${day-dateFromProp}`;
  const dateTo = `${year}-${month}-${Number(day) + dateToProp}`;

  useEffect(() => {
    setLoading(true);
    axios.get(`/api/matches?dateFrom=${dateFrom}&dateTo=${dateTo}&`)
      .then(response => {
        setMatches(response.data.matches);
        setLoading(false);
      })
      .catch(error => {
        setError('There was an error in the request.');
        setLoading(false);
      });
  }, [dateFrom, dateTo]);

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(error)

  return (
    <div className='matches-container'>
      {matches.length > 0 ? (
        matches.map((match) => {
          const date = new Date(match.utcDate).toLocaleDateString('en-US', {timeZone: 'Europe/Istanbul'});
          const time = new Date(match.utcDate).toLocaleTimeString('en-US', {timeZone: 'Europe/Istanbul'});
          

          return (
            <div key={match.id} className='row matches'>
              <div className='col-3'><img src={match.homeTeam.crest} alt="..."/>{match.homeTeam.tla}</div>
              <div className='col-1'>{match.score.fullTime.home != null ? match.score.fullTime.home : "-"}</div>
              <div className='col-4 date-time'>
                <span>{date}</span>
                <span>{time}</span>
              </div>
              <div className='col-1'>{match.score.fullTime.away != null ? match.score.fullTime.away : "-"}</div>
              <div className='col-3'><img src={match.awayTeam.crest} alt="..."/>{match.awayTeam.tla}</div>
            </div>
          );
        })
      ) : (
        <div className='not-found-div'>No matches found</div>
      )}
    </div>
  );
}

export default TodayMatches;