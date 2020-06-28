import React, { useState, useEffect, useCallback, useContext } from 'react';
import DatePicker from "react-datepicker";
import './PsyNewsPage.css';
import moment from 'moment';
import { addDays } from 'date-fns';
import LanguageContext from '../../../languageContext'





 
import "react-datepicker/dist/react-datepicker.css";
import NewsList from "../HomePage/NewsList";

const sortByOptions = [
    { value: 'publishedAt', name: 'Publish date'},
    { value: 'relevancy', name: 'Relevancy'},
    { value: 'popularity', name: 'Popularity'},
]


const PsyNewsPage = () => {
    const [ startDate, setStartDate ] = useState(moment().subtract(1, 'months').toDate());
    const [ endDate, setEndDate ] = useState(moment().toDate());
    const [results, setResults] = useState(null);
    const [sortBy, setSortBy] = useState(sortByOptions[0].value);
     
    
    const lang = useContext(LanguageContext);

    const fetchArticles = useCallback(() => {
        fetch(`http://localhost:4000/psy-news?language=${lang}&from=${startDate.toISOString()}&to=${endDate.toISOString()}&sortBy=${sortBy}`)
        .then((response) => response.json())
        .then((res) => setResults(res))
    }, [startDate, endDate, lang, sortBy]);

    useEffect(() => { fetchArticles(); }, [fetchArticles])
   //zamiast drugie fetchArticles moglobybyc startdate enddate



    const onChange = event => setSortBy(event.target.value);
    

    return (
    <div className="PsyNewsPage">
        <div>
        <label>Start date: </label>
        <DatePicker selected={startDate}
      onChange={date => setStartDate(date)}
      maxDate={addDays(new Date(), 1)}
      placeholderText="Select a date before 5 days in the future"
    />

   </div>
    <div>
        <label>End date: </label>
        <DatePicker   
            selected={endDate}
            onChange={date => setEndDate(date)}
            maxDate={addDays(new Date(), 3)}
            placeholderText="Select a date before 5 days in the future" 
            />
    </div>
    <div>
        <label>Sort</label>
        <select onChange={onChange}>
            {sortByOptions.map(({ value, name }) => (
                <option key={name.toString()} value={value}>{name}</option>
            ))}
        </select>
    </div>
        {results ? (<NewsList articles={results.articles} />) : null}
    </div>
    );

};

export default PsyNewsPage;