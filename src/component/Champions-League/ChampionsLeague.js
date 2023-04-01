import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ChampionsLeague.css';

const ChampionsLeague = () => {

 const [table, setTable] = useState([]);
 const [error, setError] = useState('');
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  setLoading(true);
  axios.get(`/api/competitions/2001/standings`)
   .then(response => {
    setTable(response.data.standings);
    setLoading(false);
   })
   .catch(error => {
    setError(error);
    setLoading(false);
   });
 }, []);

 if (loading) {
  return <div>loading....</div>;
 }
 console.log(table)
 return (
  <div className='champions-league'>
   {table.map((item,index) => {
    return <div key={index} className='group'>
     <div className='group-name'>{item.group}</div>
     <div className='row champions-table-head'>
       <div  className='col-7 club'>club</div>
       <div  className='col-1'>W</div>
       <div  className='col-1'>P</div>
       <div  className='col-1'>D</div>
       <div  className='col-1'>L</div>
       <div  className='col-1 '>Pts</div>
       
      </div>
     <div>{item.table.map((tableEl,keyindex) => {
      return <div key={keyindex} className='row champions-table'>
       <div  className='col-1 team-icon'><img src={tableEl.team.crest} /></div>
       <div  className='col-6 team-name'>{tableEl.team.shortName}</div>
       <div  className='col-1'>{tableEl.playedGames}</div>
       <div  className='col-1'>{tableEl.won}</div>
       <div  className='col-1'>{tableEl.draw}</div>
       <div  className='col-1'>{tableEl.lost}</div>
       <div  className='col-1 pts'>{tableEl.points}</div>
      </div>
     })}</div>
    </div>
   })}
  </div>
 )
}

export default ChampionsLeague