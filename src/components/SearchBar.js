import React from "react";

class SearchBar extends React.Component{

    state = {text : ''};

    onFormSubmit=(event)=>{
        event.preventDefault();

        this.props.submit(this.state.text)
    }

    render(){
        return (
        <div className="ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="field">
                <label>Image Search</label>
                <input type = "text" onChange={(e) => this.setState({text : e.target.value})}/>
                
            </div>
            </form>
        </div>
        );
    }
}
export default SearchBar;
