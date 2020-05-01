import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class Photo extends Component {
    constructor(props){
        super(props);
        this.state = { 
            photos:[]
        }
    }

    componentDidMount() {
            fetch('http://jsonplaceholder.typicode.com/photos?albumId='+this.props.match.params.topic)
            .then(response => response.json())
            .then(json => this.setState({
                photos:json
            }))
    }

    render() {

        return(
            <div data-test="photoComponent">
            {this.state.photos.map((post, index) => { 
                return(
                    <Card key={index} style= {{ marginLeft: "5%",width:"150px" , height:"150px" }}>
                    <a href={post.url}>
                        <Card.Img variant="top" src={post.thumbnailUrl} style={{width:"150px" , height:"150px"}} />
                    </a>
                    </Card>
                )
              })}
             </div>
        )
    }
}

export default Photo;