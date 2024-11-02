import React, {useEffect, useState} from "react";
import {Button, Container, Form, FormGroup, Input, Label} from "reactstrap";
import axios from "axios";
import course_url from "../bootApi/CourseApi";
import {toast} from "react-toastify";

const UpdateCourse=()=>
{
    useEffect(() => {
        document.title="Update course"

    }, []);
    const [course,setCourse]=useState({});
    const handleForm=(e)=>{
        console.log(course)
        putDataToServer(course);
        e.preventDefault();

    }

    const putDataToServer=(data)=>{
        axios.put(`${course_url}/courses`,data).then(

            (response)=>{
                console.log(response)
                console.log("success")
                toast.success("course updated successfully")
                setCourse({})

            },(error)=>{
                console.log(error)
                console.log("error")
                toast.error("some thing went wrong")
            }
            )


    }


return(
    <div>
        <h1 className="text-center p-3 my-3 ">
            Update Course
        </h1>
        <Form onSubmit={handleForm}>
            <FormGroup>
                <Label>Course ID</Label>
                <Input type="text" placeholder="Enter Here" name="courseID" id="courseID" onChange={(e)=> {setCourse({...course,courseId:e.target.value})}} />
            </FormGroup>

            <FormGroup>
                <label1>Course Title</label1>
                <Input type="text" placeholder="Enter Title Here" id="title" onChange={(e)=>{setCourse({...course,courseTitle:e.target.value})}}/>
            </FormGroup>

            <FormGroup>
                <label1>Course Description</label1>
                <Input type="text" placeholder="Enter Description Here" id="title" onChange={(e)=>{setCourse({...course,courseDesc:e.target.value})}}/>
            </FormGroup>

            <Container className="text-center" >
                <Button type="submit" color="warning">Update</Button>
            </Container>
        </Form>
    </div>
    )
}

export default UpdateCourse;