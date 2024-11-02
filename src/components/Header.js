import React from "react";
import {Card, CardBody} from "reactstrap";


function Header({name})
{
    return(
        <div>
            <Card className="my-2 bg-warning">
                <CardBody>
                    <h1 className="my-5" >Welcome to Courses Application</h1>

                </CardBody>
            </Card>

        </div>
    )
}

export default Header;
