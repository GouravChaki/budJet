import React from "react";
import {Link} from "react-router-dom";

function Links(){
    return <div >
        <div> 
        <h1>Sitemap</h1>
        <Link to="/" className="px-2">Home</Link>
        <Link to="/courses" className="px-2">Courses</Link>
        <Link to="/contact" className="px-2">Contact us</Link>
        </div>
        <div>
            <h1>Contact Us</h1>
            <a href="/">Email</a>
            <br/>
            <a href="Youtube"></a>
        </div>
    </div>;
}

export default Links;