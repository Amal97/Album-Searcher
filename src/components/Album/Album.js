import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


class Album extends Component {

    render() {
        if(!this.props.title){
            return null;
        }

        return(
            <div data-test="AlbumComponent">
            
            <Card style= {{ marginLeft: "35%", width: '18rem', height: '10rem' }}>
                <Card.Body>
                <Link to={'Photo/'+this.props.id}>
                    <Card.Title  data-test="componentTitle"> {this.props.title} </Card.Title>
                </Link>
                    <Card.Text data-test="componentDesc"> User:  {this.props.name} </Card.Text>
                </Card.Body>
            </Card>

            </div>
        )
    }
}

export default Album;