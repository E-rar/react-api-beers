import React from 'react';
import {Link} from "react-router-dom";
const Item = (props) => {
    return ( 
        <div className="flex border-bottom">
            <img src={props.img} alt="" />
            <article>
                <h2>{props.title}</h2>
                <h3 className="yellow1">{props.description}</h3>
                <h3>Created by: {props.creator}</h3>
                <Link to={`/beers/${this.props.id}`} className="button">Details</Link>
            </article>
        </div>
     );
}
 
export default Item;