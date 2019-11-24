import React from 'react';

class FilterableMainTable extends React.Component {
    constructor(props){
      super(props);
      this.state={
        data: props.products
      }
    }
    render() {
      //console.log('data',this.state.data)
      let allElements = this.props.products.map((ele)=>{
        return <li key= {ele.imdbID}>{ele.Title}</li>
      });
      return (
        <div>
          <p>Hi i M FilterableProductTable</p>
          <ul>{this.props.products !== null ? allElements : 'ok'}</ul>
        </div>
      );
    }
  }

  export default FilterableMainTable