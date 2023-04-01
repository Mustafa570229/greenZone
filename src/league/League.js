import React from 'react'
import { Link, Outlet ,useLocation ,useNavigate  } from 'react-router-dom'
import "./StandingsTable.css"

const League = ({path}) => {
  const location = useLocation();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (location.pathname === `/${path}`) {
      navigate(`/${path}/standings`);
    }
  
  }, [location.pathname, navigate,path]);
  return (
    <div className='league'>
      <div className='league-options link-container'>
        <Link to={`/${path}/standings`}
         className={location.pathname === `/${path}/standings` ? 'link active-link' : 'link'}>
          Standings</Link>
        <Link to={`/${path}/scorers` }
         className={location.pathname === `/${path}/scorers` ? 'link active-link' : 'link'}>Socrers</Link>
        <Link to={`/${path}/next-matches`}
         className={location.pathname === `/${path}/next-matches` ? 'link active-link' : 'link'}>Next Matches</Link>
      </div>

      <div>
        <Outlet />
      </div>
    </div>

  )
}

export default League