import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';


const Home=()=>
{
    useEffect(() => {
        document.title="Home"
    }, []);

    return(

            <div className="jumbotron text-center bg-primary text-white p-5" >
                <h1 className="display-4">Learn To Code</h1>
                <p className="lead">Using Coding You can build anything you can imagine digitally, only limit is your
                    imagination.</p>
                <a href="https://www.tutorialstonight.com" target="_blank" className="btn btn-info" role="button" >Start
                    Today</a>
            </div>


    )
}
export default Home;