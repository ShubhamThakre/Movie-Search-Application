import React from 'react'
import FilterableMainTable from '../components/filterableMainTable'
const axios = require('axios')
import {Button, Form, Col,Row} from 'react-bootstrap';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'


const dummyData = {
    "Search": [
        {
            "Title": "Batman: The Killing Joke",
            "Year": "2016",
            "imdbID": "tt4853102",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        },
        {
            "Title": "Batman: The Dark Knight Returns, Part 2",
            "Year": "2013",
            "imdbID": "tt2166834",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYTEzMmE0ZDYtYWNmYi00ZWM4LWJjOTUtYTE0ZmQyYWM3ZjA0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        },
        {
            "Title": "Batman: Mask of the Phantasm",
            "Year": "1993",
            "imdbID": "tt0106364",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYTRiMWM3MGItNjAxZC00M2E3LThhODgtM2QwOGNmZGU4OWZhXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"
        },
        {
            "Title": "Batman: Year One",
            "Year": "2011",
            "imdbID": "tt1672723",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNTJjMmVkZjctNjNjMS00ZmI2LTlmYWEtOWNiYmQxYjY0YWVhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        },
        {
            "Title": "Batman: Assault on Arkham",
            "Year": "2014",
            "imdbID": "tt3139086",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZDU1ZGRiY2YtYmZjMi00ZDQwLWJjMWMtNzUwNDMwYjQ4ZTVhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        },
        {
            "Title": "Batman: The Movie",
            "Year": "1966",
            "imdbID": "tt0060153",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMmM1OGIzM2UtNThhZS00ZGNlLWI4NzEtZjlhOTNhNmYxZGQ0XkEyXkFqcGdeQXVyNTkxMzEwMzU@._V1_SX300.jpg"
        },
        {
            "Title": "Batman: Gotham Knight",
            "Year": "2008",
            "imdbID": "tt1117563",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BM2I0YTFjOTUtMWYzNC00ZTgyLTk2NWEtMmE3N2VlYjEwN2JlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        },
        {
            "Title": "Batman: Arkham City",
            "Year": "2011",
            "imdbID": "tt1568322",
            "Type": "game",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZDE2ZDFhMDAtMDAzZC00ZmY3LThlMTItMGFjMzRlYzExOGE1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        },
        {
            "Title": "Superman/Batman: Apocalypse",
            "Year": "2010",
            "imdbID": "tt1673430",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjk3ODhmNjgtZjllOC00ZWZjLTkwYzQtNzc1Y2ZhMjY2ODE0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        },
        {
            "Title": "Batman Beyond",
            "Year": "1999–2001",
            "imdbID": "tt0147746",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYTBiZjFlZDQtZjc1MS00YzllLWE5ZTQtMmM5OTkyNjZjMWI3XkEyXkFqcGdeQXVyMTA1OTEwNjE@._V1_SX300.jpg"
        }
    ],
    "totalResults": "368",
    "Response": "True"
};
  
class Main extends React.Component {
    constructor(props){
      super(props);
      this.state={
        data: [],
        totalResult:1,
        filterText: ''
      }
    }
    handleFilterTextChange =(e)=>{
        this.setState({
            filterText: e.target.value
        });
    }
    searchButtonClicked=()=>{
        console.log('button clicked', this.state)
        let newMovieName = this.state.filterText;
        //let newPaginationNumber = this.state.totalResult;
        if(newMovieName !== ""){
            this.apiCallTogetData(newMovieName,1);
        }else{
            alert('Movie Name Not Found. Kindly Enter the Movie Name',newMovieName)
        }
         
    }
    apiCallTogetData = (name, page) =>{
        console.log('apicalltogetdata',name,page)
        axios.get(`http://www.omdbapi.com/?apikey=b1f770e7&${page}=1&s=${name}`)
            .then( (response) =>{
                // handle success
                console.log(response.data.Response,response.data.Search,response.data.totalResults);
                const responseTotalResults = Math.ceil(response.data.totalResults/10);
                if(response.data.Search){
                    console.log('in if');
                    this.setState({
                        data: response.data.Search,
                        totalResult: responseTotalResults
                    });
                }else{
                    console.log('out if');
                    this.setState({
                        data: dummyData.Search
                    });
                }  
            })
            .catch((error)=>{
                // handle error
                console.log(error);
                this.setState({
                    data: dummyData.Search
                });
            })
            .finally(()=>{
                // always executed
            });
    }
    componentDidMount = () =>{
        const name="batman";
        const page=1;
        this.apiCallTogetData(name,page);
    }
    render() {
      return (
        <div>
            <div>
                <Row>
                    <Col sm={4}>
                        <Form.Control 
                            size="sm" 
                            type="text" 
                            placeholder="Search..."
                            value={this.state.filterText}
                            onChange={this.handleFilterTextChange} />
                    </Col>
                    <Col sm={4}>
                        <Button 
                            type="submit" 
                            variant="primary" 
                            size="sm"
                            onClick={this.searchButtonClicked}>Search</Button>
                    </Col>    
                </Row>
                
                
            </div>
            <FilterableMainTable products={this.state.data}/>
        </div>
      );
    }
}
class SearchBar extends React.Component {
    render() {
      return (
        <form>
          <input type="text" placeholder="Search..." />
          <p>
            <input type="checkbox" />
            {' '}
            Only show products in stock
          </p>
        </form>
      );
    }
  }

  export default Main