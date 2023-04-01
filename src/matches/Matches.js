import React from 'react'
import { Link, Outlet ,useLocation ,useNavigate  } from 'react-router-dom'
import "./Matches.css"
import '../league/StandingsTable.css';



const Matches = () => {
  const location = useLocation();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (location.pathname === "/matches") {
      navigate("/matches/today-matches");
    }
  }, [location.pathname, navigate]);
  return (
    <div className='league' >
      <div className='league-options link-container'>
       <Link to="/matches/yesterday-matches" className={location.pathname ==="/matches/yesterday-matches" ? 'link active-link' : 'link'}>
          Yesterday </Link>
        <Link to="/matches/today-matches"  className={location.pathname ==="/matches/today-matches" ? 'link active-link' : 'link'}>Today</Link>
       <Link to="/matches/tomorrow-matches"  className={location.pathname ==="/matches/tomorrow-matches" ? 'link active-link' : 'link'}>Tomorrow </Link>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Matches