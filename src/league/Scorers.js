import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StandingsTable.css';

const Scorers = ({id}) => {
  const [table, setTable] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`/api/competitions/${id}/scorers`)
      .then(response => {
        setTable(response.data.scorers);
        setLoading(false);

      })
      .catch(error => {
        setError('There was an error in the request.');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(error)

  return (
    <div className='standings-container'>
      <div className='standings-head row'>
        <div className='col-4'>Name</div>
        <div className='col-4'>Team</div>
        <div className='col-1'>G</div>
        <div className='col-1'>Ass</div>
        <div className='col-1'>Pen</div>
      </div>
      {table?.map((person, index) => (
        <div key={index} className='standings-body row'>
          <div className='standings-body-elements col-4'>
            <span style={{color:"rgb(234 101 30)"}}>{index+1}&nbsp;</span>
            <span>{person.player.name}</span>
          </div>
          
          <div className='standings-body-elements col-4'>
            <span><img src={person.team.crest} alt="..." /></span>
            <span>{person.team.shortName}</span>
            </div>

          <div className='standings-body-elements col-1'>{person.goals}</div>
          <div className='standings-body-elements col-1'>{person.assists}</div>
          <div className='standings-body-elements col-1'>{person.penalties?(person.penalties):(0)}</div>


        </div>

      ))}
    </div>
  )
}
export default Scorers