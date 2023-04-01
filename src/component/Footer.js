import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaInstagram, FaFacebook, FaTwitter, FaGithub, FaTelegram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
  const [table, setTable] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`/api/competitions`)
      .then(response => {
        setTable(response.data.competitions);
        setLoading(false);

      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className='footer-main'>
      <div className='footer-container'>
        {table?.map((item,index) =>
        (<div key={index} className='footer-inner'>
          <span> <img src={item.emblem} alt=".." /></span>

        </div>)
        )}
      </div>
      <div className='footer-links'>
        <Link to="/la-liga">Spain La Liga</Link>
        <Link to="/primeira-liga">Premier League</Link>
        <Link to="/serie-a">Serie A</Link>
        <Link to="/bundesliga">Bundesliga</Link>
        <Link to="/ligue1">Ligue 1</Link>
        <Link to="/primeira-liga">Primeira Liga</Link>

      </div>

      <div className="icons" id='contact'>

        <div className="icon">
          <div className="bg"></div>
          <div className="glass">
            <i><FaYoutube /></i>
          </div>
        </div>


        <div className="icon">
          <div className="bg"></div>
          <div className="glass">
            <i >  <FaInstagram /></i>
          </div>
        </div>

        <div className="icon">
          <div className="bg"></div>
          <div className="glass">

            <i ><FaFacebook /></i>
          </div>
        </div>

        <div className="icon">
          <div className="bg"></div>
          <div className="glass">
            <i ><FaTwitter /></i>
          </div>
        </div>

        <div className="icon">
          <div className="bg"></div>
          <div className="glass">
            <i ><FaGithub /></i>
          </div>
        </div>

        <div className="icon">
          <div className="bg"></div>
          <div className="glass">
            <i ><FaTelegram /></i>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Footer