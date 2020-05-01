import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Album from './components/Album/Album.js';
import { connect } from 'react-redux';
import { fetchAlbums } from './actions/index.js';
import { fetchUsers } from './actions/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {

  componentDidMount(){
    this.props.fetchAlbums();
    this.props.fetchUsers();
  }

  render(){
    const { posts } = this.props;
    let mergedData = [];
    let k = 0;

    console.log(posts);


    for(let i = 0; i < posts.albums.length; i++){
      for(let j = 0; j < posts.users.length; j++){
        if(posts.albums[i]['userId'] === posts.users[j].id){
          mergedData[k] = {...posts.users[j], ...posts.albums[i]};
          k++;
        }
      }
    }

    return (
    <div className="body">
      <div className="App">
        <Header> </Header>
        {mergedData.length > 0 &&
          <div  className="card-group"> 
            {mergedData.map((post, index) => { 
                return(
                  <Album key={index} {...post} />
                )
              })}
          </div>
        }
      </div>
    </div>
  )
}
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps,{fetchAlbums,fetchUsers})(App);
