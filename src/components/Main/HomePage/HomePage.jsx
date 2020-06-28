import React from 'react';
import NewsCard from './NewsCard'
import './HomePage.css'
import LanguageContext from '../../../languageContext'

import NewsFiltersBar from './NewsFiltersBar'
// import NewsList from './NewsList';
import { Pagination } from 'semantic-ui-react';


class HomePage extends React.Component {
    
    static contextType = LanguageContext;

    constructor(props) {
        super(props);

        this.state = {
            results: null,
            category: "general",
            searchQuery: null,
            page: 1
            
        }
    }



    componentDidMount() {
       this.getArticles();
       this.getArticles2();
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (prevState.category !== this.state.category || prevState.lang !== this.state.lang) this.getArticles();
    //     if (prevState.lang !== this.context) this.setState({ lang: this.context });
        
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (
            prevState.category !== this.state.category || 
            prevState.searchQuery !== this.state.searchQuery
            ) {
                this.getArticles2();
            };
        if (prevState.category !== this.state.category || prevState.lang !== this.state.lang) this.getArticles();
        if (prevState.lang !== this.context) this.setState({ lang: this.context });
        if (prevState.page !== this.state.page) this.getArticles();
        // if (prevState.phrase !== this.state.phrase) this.getArticles();
    }

    getQuery () {
        const { category, searchQuery } = this.state;

        let query;
        if (category) {
            query = searchQuery 
            ? `?category=${category}&q=${searchQuery}`
            : `?category=${category}`;
        } else {
            query = searchQuery ? `?q=${searchQuery}` : "";
        }
        return query;
    }

    getArticles (){
        const {category, page} = this.state; 
        const query = category ? `&category=${category}` : '';
        // const queryWithPhrase = page ? `${query}&q=${phrase}` : query;
        const queryWithPage = page ? `&page=${page}` : null;
        fetch(`http://localhost:4000/articles?${queryWithPage}&country=${this.context}${query}`)
        .then((response) => response.json())
        .then((results) => this.setState({ results }))
    }
    
    // setCategory = (category) => this.setState({category});
    // setSearchQuery = searchQuery => this.setState({ searchQuery });

    getArticles2 (){
         fetch(`http://localhost:4000/articles${this.getQuery()}`)
        .then((response) => response.json())
        .then((results) => this.setState({ results }))
    }
    
    setCategory = (category) => this.setState({category});
    setSearchQuery = searchQuery => this.setState({ searchQuery });

    onPageChange = (e, {activePage}) => {
        this.setState({page: activePage});
    }
    
    render () {
        const { results } = this.state;
        if (!results) return null;
        return(
            <>
        
        
        
        <div id="HomePage"> 
        <NewsFiltersBar 
            onCategoryChange={this.setCategory}
            onSearchQueryChange={this.setSearchQuery}
            category={this.state.category}
            />

        {results.articles.map((item, index) => (
        <NewsCard key={index}
           urlToImage={item.urlToImage} 
          title={item.title} 
          description={item.description} 
          url={item.url} 
          sourceName={item.source.name} 
          publishedAt={item.publishedAt}/>
        ))}
    </div>
    {results && results.totalResults ? (<Pagination onPageChange={this.onPageChange} defaultActivePage={1} totalPages={Math.ceil(results.totalResults / 20)} />) : null}
    </>
)
        }


// render () {
//     const { results }= this.state;

//     if (!results) return null;

//     return (
//     <div id="HomePage"> 
//     <NewsFiltersBar 
//         onCategoryChange={this.setCategory}
//         onSearchQueryChange={this.setSearchQuery}
//         category={this.state.category}
//         />
//         <NewsList articles={results.articles} />
// </div>
//         );
//       }
    }

export default HomePage;