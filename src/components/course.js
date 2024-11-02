import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Card,CardBody,CardTitle,CardSubtitle,CardText,CardFooter,Button,Container} from "reactstrap";
import axios from "axios";
import course_url from "../bootApi/CourseApi";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const Course=({course})=>
{
    const deleteCourse=(courseId)=>{

axios.delete(`${course_url}/courses/${courseId}`).then(
    (response)=>{
        toast.success("Course Deleted successfully")
    },
    (error)=>{
        toast.error("Some thing went wrong")

}

)
    }
    const navigate= useNavigate();
 const handleClick=()=>{
    navigate("/update-course")
 }

return(
    <Card className="text-center">

        <CardBody>


            <CardSubtitle className="font-monospace">{course.courseTitle}</CardSubtitle>
            <CardText>{course.courseDesc}</CardText>
            <Container className="text-center">
                <Button color="danger" onClick={()=>{deleteCourse(course.courseId)}} > Delete </Button>
                {' '}
                <Button  color="warning" onClick={handleClick}> Update </Button>

            </Container>

        </CardBody>

    </Card>
)
}
export default Course;