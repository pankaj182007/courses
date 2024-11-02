import React from "react";
import './App.css';
import { Col, Container, Row} from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import Home from "./components/Home";
import AllCourses from "./components/AllCourses";
import AddCourse from "./components/AddCourse";
import Header from "./components/Header";
import Menus from "./components/Menus";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import UpdateCourse from "./components/UpdateCourse";



function App() {
    // const btnHandle=()=>{
    //    // toast("This is my first massage")
    //     toast.success("Done",{position:"top-center"})
    // }
  return(

       <Router>

     <div>

            <ToastContainer></ToastContainer>
            <Container>
                <Header></Header>

                <Row>
                    <Col  md={4}>
                        <Menus></Menus>
                    </Col>

                    <Col  md={8}>

                        <Routes>
                       <Route path="/" element={<Home></Home>} exact></Route>
                        <Route path="/add-course" element={<AddCourse></AddCourse>} exact></Route>
                        <Route path="/view-courses" element={<AllCourses></AllCourses>} exact></Route>
                            <Route path="/about" element={<About/>} exact></Route>
                            <Route path="/contact" element={<Contact/>} exact></Route>
                            <Route path="/update-course" element={<UpdateCourse/>} exact></Route>


                        </Routes>

                    </Col>
                </Row>

    </Container>

         {/*<Home></Home>*/}
         {/*<AllCourses></AllCourses>*/}
         {/*<AddCourse></AddCourse>*/}
         {/*<Course course={{title:"html course",description:"this is just testing"}}></Course>*/}
      {/*   <h1>first react component</h1>*/}
      {/*<Button  color="warning" outline onClick={btnHandle}>first react button</Button>*/}

     </div>  </Router>



// <div >
//         <Header name="Pankaj Singh"/>
//     <hr/>
//         <h1>This is my React App</h1>
//         <p>This is my program . Iam currently learning react js</p>
//         <p>Because i want to develop application that calls my Rest Api</p>
//     <hr/>
//     <Header name="Pushpendra Singh"/>
//
// </div>
);
}

export default App;
