import React, {useEffect} from "react";

const Contact=()=>{
    useEffect(() => {
        document.title="Contact"

    }, []);

    return(
        <div className="text-center bg-primary text-white p-5">
            <h2 className="display-4">My Email <h3 className="display-6">Pushpendrasingh182007@gmail.com</h3></h2>
        </div>
    )

}
export default Contact;