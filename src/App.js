import React from 'react'
import NavbarHeader from "./component/NavbarHeader"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import TodayMatches from './matches/TodayMatches'
import "./App.css"
import Matches from './matches/Matches'
import StandingsLeague from './league/StandingsLeague '
import League from './league/League'
import Scorers from "./league/Scorers"
import NextMatches from "./league/NextMatches"
import Footer from './component/Footer'
import News from './News/News'
import ChampionsLeague from './component/Champions-League/ChampionsLeague'

const App = () => {
  return (
    <div className='app'>
      <Router >
        <NavbarHeader />

        <Routes>
        <Route path="/" element={<News/>} />
        <Route path="/champions-league" element={<ChampionsLeague/>} />
          <Route path="/matches" element={<Matches />}>
            <Route path="yesterday-matches" element={<TodayMatches dateFromProp={2} dateToProp={0} />} />
            <Route path="today-matches" element={<TodayMatches dateFromProp={1} dateToProp={1} />} />
            <Route path="tomorrow-matches" element={<TodayMatches  dateFromProp={0} dateToProp={2} />} />

          </Route>


            <Route path="/la-liga" element={<League path="la-liga"/>} >
            <Route path="standings" element={<StandingsLeague id="2014" />} />
            <Route path="scorers" element={<Scorers id="2014"/>} />
            <Route path="next-matches" element={<NextMatches id="2014"/>} />
            </Route>

            <Route path="/premier-league" element={<League path="premier-league"/>} >
            <Route path="standings" element={<StandingsLeague id="2021" />} />
            <Route path="scorers" element={<Scorers id="2021"/>} />
            <Route path="next-matches" element={<NextMatches id="2021"/>} />
            </Route>

            
            <Route path="/serie-a" element={<League path="serie-a"/>} >
            <Route path="standings" element={<StandingsLeague id="2019" />} />
            <Route path="scorers" element={<Scorers id="2019"/>} />
            <Route path="next-matches" element={<NextMatches id="2019"/>} />
            </Route>

            <Route path="/bundesliga" element={<League path="bundesliga"/>} >
            <Route path="standings" element={<StandingsLeague id="2002" />} />
            <Route path="scorers" element={<Scorers id="2002"/>} />
            <Route path="next-matches" element={<NextMatches id="2002"/>} />
            </Route>

            <Route path="/ligue1" element={<League path="ligue1"/>} >
            <Route path="standings" element={<StandingsLeague id="2015" />} />
            <Route path="scorers" element={<Scorers id="2015"/>} />
            <Route path="next-matches" element={<NextMatches id="2015"/>} />
            </Route>

            <Route path="/primeira-liga" element={<League path="primeira-liga"/>} >
            <Route path="standings" element={<StandingsLeague id="2017" />} />
            <Route path="scorers" element={<Scorers id="2017"/>} />
            <Route path="next-matches" element={<NextMatches id="2017"/>} />
            </Route>
          




        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
