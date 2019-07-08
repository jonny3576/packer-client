import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import styled from 'styled-components/macro';

// const StatusInfo = styled.button`
//       background: ${background};
//       color: yellow;
//
//       font-size: 1em;
//       margin: 1em;
//       padding: 0.25em 1em;
//       border: 2px solid palevioletred;
//       border-radius: 3px;
//       `;//TODO: Shouldn't define styled components inside render method: https://www.styled-components.com/docs/basics#adapting-based-on-props
//
// const createStatusButton = (props) => {
//     let background = "";
//     if(props.deliverygood.deliveryState === "Waiting for Delivery"){
//         background = "palevioletred";
//     }
//     else if(props.deliverygood.deliveryState === "In Delivery"){
//         background = "green";
//     }
//     else{
//         background = "red"
//     }
//     return
// };

export default class MonitorRow extends React.Component {

    constructor(props) {
        super(props);
    }

    //TODO: Check if there is better way with styled components
    statusButtonVariant(){
        if(this.props.deliverygood.deliveryState === "In Delivery"){
            return "info";
        }
        else if(this.props.deliverygood.deliveryState === "Delivered"){
            return "success";
        }
        else if(this.props.deliverygood.deliveryState === "Waiting for Routing"){
            return "warning";
        }
        else if(this.props.deliverygood.deliveryState === "Waiting for Pickup"){
            return "primary";
        }
        else{
            return "dark";
        }
    }


    render(){
        return (
            <Container>
                <p/>
                <div className="list-group">{/*https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-list-groups.php*/}
                    <div href="#" className="list-group-item list-group-item-action">
                        <div className="d-flex justify-content-between text-secondary">
                            <div>
                                <b>Date:</b> {new Intl.DateTimeFormat('en-GB', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit'
                            }).format(new Date(this.props.deliverygood.deliveryDate))}
                            </div>
                            <div><b>Price:</b> {this.props.deliverygood.price} €</div>
                            {/*<div><b>Delivery No.:</b> PA-1906130087</div>*/}
                            {/*//TODO: Add Delivery No to database schema*/}
                        </div>
                        <p/>
                        <Row>
                            <Col className="align-self-center text-center h3">
                                <p className="h3 font-weight-bold">
                                    {this.props.deliverygood.name}
                                {/*    TODO: Check why deliverygood in line above is unresolved variable*/}
                                </p>
                                <Badge variant={this.statusButtonVariant()}>{this.props.deliverygood.deliveryState}</Badge>
                            </Col>
                            <Col>
                                <div className="font-weight-bold">Sender</div>
                                <p>
                                    Jon Doe(TODO)<br/>
                                    {this.props.deliverygood.origination.street}<br/>
                                    {this.props.deliverygood.origination.postalCode}
                                    <span> </span>
                                    {this.props.deliverygood.origination.city}<br/>
                                </p>
                                <div className="font-weight-bold">Recipient</div>
                                <p>
                                    Jon Doe(TODO)<br/>
                                    {this.props.deliverygood.destination.street}<br/>
                                    {this.props.deliverygood.destination.postalCode}
                                    <span> </span>
                                    {this.props.deliverygood.destination.city}<br/>
                                </p>
                            </Col>
                            <Col className="align-self-center text-center">
                                <p>
                                    <Button href="#" variant="secondary" size="xs">More Info</Button>
                                </p>
                                {this.props.deliverygood.deliveryState === "Waiting for Routing" ?
                                <p>
                                    <Button href="#" variant="danger" size="xs">Delete</Button>
                                </p> : <span/>}
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        )
    }
}