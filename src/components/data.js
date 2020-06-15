import React, { Component } from 'react'


class data extends Component {


    render() {
        if(this.props.user.data !== null){
        return (
            <div className="container" style={{padding:"10px"}}>
                <div className="row">
                    <div className="col-9 col-md-3">
                        <img style={{borderRadius:"50%",maxWidth:"100%"}} src={'' + this.props.user.avatar_url} alt=""/>
                    </div>
                    <div className="col-9">
                                User Name : {this.props.user.login}<br/>
                                User publicRepos : {this.props.user.public_repos}<br/>
                                User followers : {this.props.user.followers}<br/>
                                User following : {this.props.user.following}<br/>
                                User created at : {this.props.user.created_at}<br/>
                                user updated at : {this.props.user.updated_at}<br/>
                                user location : {this.props.user.location}<br/>
                                user company : {this.props.user.company}<br/>
                    </div>
               
                </div>
                <div className="row" style={{padding:"10px"}}>
                <div className="col-1"></div>
                <div >
                <a href={this.props.user.html_url}><button>View Profile</button></a>
                </div>
                </div>
            </div>
        )}else{
            return(
                <div></div>
            )
        }
    }
}

export default data;
