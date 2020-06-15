import React, { Component } from 'react'


class searchBar extends Component {
    state={
        text:""
    };
    onFormSubmit=(e)=>{
        e.preventDefault();
        this.props.onSubmit(this.state.text)

    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Search for Git user</label>
                        <input type="text" value={this.state.text} onChange={(e)=>{this.setState({text:e.target.value})}} />
                    </div>
                </form>
               
            </div>
        )
    }
}
export default searchBar