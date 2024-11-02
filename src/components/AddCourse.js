import React, {useEffect, useState} from "react";
import {Button, Container, Form, FormGroup, Input, Label} from "reactstrap";
import axios from "axios";
import course_url from "../bootApi/CourseApi";
import {toast} from "react-toastify";

const AddCourse=()=>{
    useEffect(() => {
        document.title="Add Course"

    }, []);
    const [course,setCourse]=useState({});
//handle form
const handleForm=(e)=>{
    console.log(course);
    postDataToServer(course);

    e.preventDefault()

}

// creating post data on server
    const postDataToServer=(data)=>{
    axios.post(`${course_url}/courses`,data).then(
        (response)=>{
            console.log(response);
            console.log("success")
            toast.success("course added successfully")
            setCourse({});

        },(error)=>{
            console.log(error);
            console.log("error")
            toast.error("something went wrong")
        }
        )
    }


    return(
        <div>
            <h1 className="text-center p-3 my-3">Fill Course Detail</h1>
            <Form onSubmit={handleForm}>

                <FormGroup>
                    <Label>Course ID</Label>
                    <Input type="text" placeholder="Enter here" name="userId" id="userId" onChange={(e)=> {setCourse({...course,courseId:e.target.value})}}></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="title">Course Title</Label>
                    <Input type="text" placeholder="Enter title here" id="title" onChange={(e)=> {setCourse({...course,courseTitle:e.target.value})}}></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="description">Course Description</Label>
                    <Input type="textarea" style={{height:200}} placeholder="Enter description here" id="description" onChange={(e)=>{setCourse({...course,courseDesc:e.target.value})}}></Input>
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">Add Course</Button>
                    {" "}
                    <Button type="reset" color="warning" onClick={()=>setCourse({})}>Clear</Button>
                </Container>
            </Form>

        </div>
    )
}
export default AddCourse;