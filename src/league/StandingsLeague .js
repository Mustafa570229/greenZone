import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StandingsTable.css';

const StandingsLeague = ({id}) => {
  const [table, setTable] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`/api/competitions/${id}/standings`)
      .then(response => {
        setTable(response.data.standings[0]?.table ?? []);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
      console.log(table)
  }, [id]);

  if (loading) {
    return <div>loading....</div>;
  }
console.log(error)
  return (
    <div className='standings-container'>
      <div className='standings-head row'>
        <div className='col-7'>Club</div>
        <div className='col-1'>MP</div>
        <div className='col-1'>W</div>
        <div className='col-1'>D</div>
        <div className='col-1'>L</div>
        <div className='col-1'>Pts</div>
      </div>

      {table?.map((team, index) => (
        <div key={index} className='standings-body row'>
          <div className='standings-body-elements col-7'>
            <span>{String(team.position).padStart(2, '0')}</span>
            <span><img src={team.team.crest} alt={team.team.shortName} /></span>
            <span>{team.team.shortName}</span>
          </div>
          <div className='standings-body-elements col-1'>{team.playedGames}</div>
          <div className='standings-body-elements col-1'>{team.won}</div>
          <div className='standings-body-elements col-1'>{team.draw}</div>
          <div className='standings-body-elements col-1'>{team.lost}</div>
          <div className='standings-body-elements col-1'>{team.points}</div>
        </div>
      ))}
    </div>
  );
};

export default StandingsLeague;
