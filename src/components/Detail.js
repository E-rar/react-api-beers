import{Link} from 'react-router-dom'
import React, { Component } from 'react';




class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            done: false,
          }
    
        
    }
    componentDidMount(){
        console.log('The component did mount again')
        fetch(`https://ih-beers-api2.herokuapp.com/beers${this.props.match.params.id}`)
            .then(response => response.json())
            .then(json => this.setState({ data:json }, () => {
                this.setState({ done: true })
            }))
    }

    render() { 
        return ( 
            <div className="detail"> hallo
            <img src={this.state.done && this.state.data.image_url} alt="beer" />
            <h1>{this.state.done && this.state.data.name}</h1>
            <h3>{this.state.done && this.state.data.tagline}</h3>
            <div className="space-between">
                <h5>First brewed:</h5>
                <h5>{this.state.done && this.state.data.first_brewed}</h5>
            </div>
            <div className="space-between">
                <h5>Attenuation level:</h5>
                <h5>{this.state.done && this.state.data.attenuation_level}</h5>
            </div>
            <p>{this.state.done && this.state.data.description}</p>
            <Link to="/allbeers"><div className="button-back"></div></Link>
            </div>
         );
    }
}
 
export default Details;