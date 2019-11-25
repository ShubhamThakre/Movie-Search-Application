import React from 'react';
import {Button,Card,Col,Row,Pagination,Accordion,useAccordionToggle} from 'react-bootstrap';


const FilterableMainTable = (props) => {
    
  
        
        let allElements = props.products.map((ele)=>{
            return <Col sm={3} key= {ele.imdbID} style={{cursor:'pointer'}}>
                <Accordion defaultActiveKey="0">
                    <Card style={{ width: '18rem', margin:' 0px 0px 25px 0px',}} title={ele.Title}>
                        <Card.Img variant="top" src={ele.Poster == "N/A" ? null: ele.Poster} style={{height: '300px'}}/>
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

        




        return (
        <div style={{margin:'20px 0px'}}>
            <ul><Row>{props.products !== null ? allElements : null}</Row></ul>
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
            
        </div>
      );
   
  }

  export default FilterableMainTable