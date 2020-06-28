import React from 'react';
import NewsCard from './NewsCard';
import './HomePage.css'



const NewsList = (props) => (
    <div id="HomePage">
    {props.articles.map((item, index) => (
        <NewsCard key={index}
        urlToImage={item.urlToImage} 
       title={item.title} 
       description={item.description} 
       url={item.url} 
       sourceName={item.source.name} 
       publishedAt={item.publishedAt}/>
     ))}
     </div>
);






export default NewsList;