import React from 'react';
import './NewsCard.css';


const NewsCard = (props) => (
<div className="NewsCard">
    <img src={props.urlToImage} alt="" />

    <div className='NewsCard-content'>
    <h2>{props.title}</h2>
    <p>Umieszczone {props.publishedAt}</p>
    <p dangerouslySetInnerHTML={{__html: props.description }} />
    <a href={props.url} target="_blank">Zobacz wiecej</a>
    <p>Zrodlo: {props.sourceName}</p>

    </div>
</div>

);

export default NewsCard;