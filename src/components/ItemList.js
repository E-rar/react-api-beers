import React, { Component } from 'react';
import Item from './Item'
import{Link} from 'react-router-dom'

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            beer: [],
         }
    }
    componentDidMount(){
        console.log('The component did mount')
        fetch(`https://ih-beers-api2.herokuapp.com/beers`)
            .then(response => response.json())
            .then(json => this.setState({ beer:json }))
        }
    render() { 
        return ( 
            <div className="grid">
                
                 {this.state.beer.map(elt => 
                 
                 <Item 
                 key={elt._id}
                 id={elt._id}
                 title={elt.name} 
                 description={elt.tagline} 
                 creator={elt.name} 
                 img={elt.image_url} 
                 ></Item>
                 
                 )}
                 
                </div>
         );
    }
}
 
export default ItemList;