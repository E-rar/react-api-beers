import React from 'react';
import {Link} from "react-router-dom";


const Home = () => {
    return ( 
        <section >
            <Link to="/allbeers">
            <div className="all">
                <div className="yellow-banner">
                    <h1>All Beers</h1>
                </div>
              
            </div>
            </Link>
            <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium velit maiores provident sunt accusamus voluptatum, deleniti ut excepturi repellat sequi.
            </p>
            <Link>
            <div className="random">
                <div className="yellow-banner">
                    <h1>Random Beer</h1>
                </div>
            </div>
            </Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aperiam provident impedit non. Optio provident omnis enim repellendus animi possimus!</p>
        </section>
     );
}
 
export default Home;