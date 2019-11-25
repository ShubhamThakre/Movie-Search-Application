import React from 'react';
import {Button,Card,Col,Row,Pagination,Accordion,useAccordionToggle} from 'react-bootstrap';

class FilterableMainTable extends React.Component {
    constructor(props){
      super(props);
      this.state={
        data: props.products,
        showMovieDetailText: []
      }
      
    }
    cardOnclikFunction =(id) =>{
        console.log('hi',id);
        
    }
    
    render() {
        
        
        let allElements = this.props.products.map((ele)=>{
            return <Col sm={3} key= {ele.imdbID} style={{cursor:'pointer'}} onClick={this.cardOnclikFunction}>
                <Accordion defaultActiveKey="0">
                    <Card style={{ width: '18rem', margin:' 0px 0px 25px 0px',}} title={ele.Title}>
                        <Card.Img variant="top" src={ele.Poster} style={{height: '300px'}}/>
                        <Card.Body style={{alignItems:'center',padding:'5px 15px 0px 15px'}}>
                            <Card.Title style={{margin:'0px 0px'}}>{ele.Title.length >= 20 ? ele.Title.substr(0,20)+'...' : ele.Title }</Card.Title>
                        </Card.Body>
                        <div style={{margin:'0px',padding:'0px'}}>
                            <Accordion.Toggle  as={Button} variant="link" eventKey="1" style={{ float: 'right',padding:'0px 5px',margin: '-2px 0px'}}>
                               Info..
                            </Accordion.Toggle>
                        </div>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body style={{margin:'0px 10px'}}>
                                <li>IMDB ID: {ele.imdbID}</li>
                                <li>Type: {ele.Type}</li>
                                <li>Year: {ele.Year}</li>
                            </Card.Body>
                        </Accordion.Collapse>  
                    </Card>
                </Accordion>    
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