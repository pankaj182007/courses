import React from "react";
import {ListGroup, ListGroupItem,} from "reactstrap";
import {Link} from "react-router-dom";



const Menus=()=>
{
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Home</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" action>Add Course</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-courses" action>View Course</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/update-course" action>Update Course</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/about" action>About</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/contact" action>Contact</Link>




        </ListGroup>

    )
}
export default Menus