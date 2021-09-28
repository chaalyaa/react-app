import React, { Component, useState } from 'react';
import { Row,Col, Card,CardBody,CardHeader } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";

class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
      return (
        <Card>
            <CardHeader className="headerTitle">
                {this.props.data.Title}
            </CardHeader>
            <CardBody style={{display:"auto", padding:"50px"}}>
                <img src={this.props.data.Poster} alt="logo" minheight="100px" minwidth="200px"/>                
            </CardBody>
        </Card>
        );
    } 
}
export default (App);
