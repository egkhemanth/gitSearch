import React from 'react';
import axios from "axios"
import Nav from "./components/nav"
import SearchBar from "./components/searchBar"
import Data from "./components/data"



class App extends React.Component {
  state={
    user:" "
  }
 
  onSearchSubmit=(text)=>{
    axios.get( `https://api.github.com/users/${text}`).then((response)=>{
      console.log(this.state.user)
      this.setState({user:response.data})
    }
    )
  
  }
  render(){
  const name = this.state.user.login;
  let userProfile;
  
  if (name) {
    userProfile = <Data user={this.state.user} />
  }
  return (
    <div>
    <Nav/>
    <div className="ui container" style={{marginTop:"10px"}}><SearchBar onSubmit={this.onSearchSubmit}/></div>
      {userProfile}
    </div>

  );}
}

export default App;

