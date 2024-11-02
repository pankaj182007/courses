import React, {useEffect} from "react";



const About=()=>{
    useEffect(() => {
        document.title="About"

    }, []);

    return(
        <div className="jumbotron text-center bg-primary text-white p-5" >
            <h1 className="display-4">This Project is only for learning purpose</h1>
            <p className="lead"> In this application user can perform various operations
            Like <h6>Add courses,Delete Courses,View courses,Update courses </h6></p>

        </div>

    )
}
export default About;