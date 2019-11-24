import React from 'react'
import FilterableMainTable from '../components/filterableMainTable'
const axios = require('axios')


const PRODUCTS = [
    {id:1,category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {id:2,category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {id:3,category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {id:4,category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {id:5,category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {id:6,category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ];
  
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
        let newPaginationNumber = this.state.totalResult;
        this.apiCallTogetData(newMovieName,1); 
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
                        data: []
                    });
                }  
            })
            .catch((error)=>{
                // handle error
                console.log(error);
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
                <input 
                    type="text" 
                    placeholder="Search..."
                    value={this.state.filterText}
                    onChange={this.handleFilterTextChange} />
                <button type="submit" onClick={this.searchButtonClicked}>Search</button>
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