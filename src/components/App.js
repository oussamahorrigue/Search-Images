import React from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";
import ImagesList from "./ImagesList";

class App extends React.Component{


    state = {images : []};
    onSearchSubmit =async (term) =>{
        const response = await axios.get("https://api.unsplash.com/search/photos",{
            params :{query : term},
            headers: {Authorization: 'Client-ID 9iq2nmm-MitXxMmAeNiRic9li1WhoZnuRDhuEfng0BA'}
        })
        
        this.setState({images : response.data.results})
        
    }

    render(){
        return (
        <div className="ui container" style = {{marginTop:"20px"}}>
            <SearchBar submit = {this.onSearchSubmit}/>
            <ImagesList images=  {this.state.images}/>

        </div>
        );
    }
}

export default App;