import {Col,Row} from 'react-bootstrap';


const Footer = () =>{
    return(
        <div>
            <Row className="justify-content-md-center">
            <Col style={{textAlign:'center'}}>
                <span style={{fontSize: '12px'}}>2019@copyrights! | Author:Shubham Thakre</span>
            </Col>
            </Row>
        </div>
    );
}

export default Footer