import React, { useEffect, useState } from 'react';
import axios from 'axios';
import defaultImage from "../image/logo3.png"
import "./News.css"
const News = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios.get("https://newsapi.org/v2/top-headlines?country=us&category=sports&language=en&apiKey=4e37241c5ae34aff9bdd0f3639de86b1")
      .then(response => {
        setNews(response.data.articles);
        setLoading(false);
      })
      .catch(error => {
        setError('There was an error in the request.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className='news-main'>
       {news.map((element,index)=>{
        return( 
        <div key={index} className='news-container'>
          <div className='news-text'>
          <div className='news-title'>{element.title?(element.title) : "No Title"}</div>
          <div className='news-desc'>{element.description}</div>
          <div className='news-content'>{element.content}</div>
          <a href={element.url}>Read More...</a>
          <div className='date-auther-div'>
          <div className='news-author'>Author : <span>{element.author?element.author:"No Auther"}</span> </div>
          <div className='news-date'>Date :  <span>{element.publishedAt}</span></div>
          </div>
   

          </div>
          
          <div className='news-img'><img src={element.urlToImage?(element.urlToImage):(defaultImage)} /></div>

       </div>
        )
    
       })}
    </div>
  )
}

export default News