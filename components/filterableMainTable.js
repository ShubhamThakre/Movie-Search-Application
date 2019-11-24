import React from 'react';
import {Button,Card,Col,Row,Pagination} from 'react-bootstrap';

class FilterableMainTable extends React.Component {
    constructor(props){
      super(props);
      this.state={
        data: props.products
      }
    }
    cardOnclikFunction =() =>{
        console.log('hi');
    }
    render() {

        let allElements = this.props.products.map((ele)=>{
            return <Col sm={3} key= {ele.imdbID} style={{cursor:'pointer'}} onClick={this.cardOnclikFunction}>
                    <Card style={{ width: '18rem',height: '30rem', margin:' 0px 0px 25px 0px'}} title={ele.Title}>
                        <Card.Img variant="top" src={ele.Poster} style={{height: '85%'}}/>
                        <Card.Body style={{alignItems:'center'}}>
                        <Card.Title >{ele.Title.length >= 40 ? ele.Title.substr(0,40)+'...' : ele.Title }</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
        });

        let active = 2;
        let items = [];
        for (let number = 1; number <= 5; number++) {
            items.push(
                <Pagination.Item key={number} active={number === active}>
                {number}
                </Pagination.Item>,
            );
        }

        const paginationBasic = (
        <div>
            <Pagination size="sm">{items}</Pagination>
        </div>
        );




        return (
        <div style={{margin:'20px 0px'}}>
            <ul><Row>{this.props.products !== null ? allElements : 'ok'}</Row></ul>
            <style jsx>{`
            ul {
            padding: 0px 15px;
            color: white
            }

            li {
            list-style: none;
            margin: 5px 0;
            }
            `}
            </style>
            <div>
                {paginationBasic}
            </div>
        </div>
      );
    }
  }

  export default FilterableMainTable