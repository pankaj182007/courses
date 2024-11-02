import React, {useEffect, useState} from "react";
import course from "./course";
import course_url from "../bootApi/CourseApi";
import axios from "axios";
import {toast} from "react-toastify";
import Course from "./course";

const AllCourses=()=>
{

    useEffect(()=>
    {
        document.title="AllCourses";

    },[]);
    // function to call server:
    const [courses,setCourses]=useState([]);
    const getAllCoursesFromServer=()=>{
        axios.get(`${course_url}/courses`).then(
            (response)=>{
                 //for success
               console.log(response);
                setCourses(response.data);
               // console.log(response.data);
              toast.success("Courses has been loaded")



            },
            (error)=>{
                //for error
                console.log(error);
                toast.error("Something went wrong")

            }

        );

    }
    useEffect(() => {

       getAllCoursesFromServer();
    },[] );





    return(
        <div>



            <h1>All Courses </h1>
            <p>List of courses are as follows</p>
            {
                courses.length > 0 ? courses.map((item) => (
                    <Course key={item.data} course={item}/>
                )) : "No courses"

            }


        </div>
    )
}
export default AllCourses;