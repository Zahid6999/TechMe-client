import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Courses = () => {
    const [courses, setCourses] = useState([]);

 useEffect(() => {
    fetch(' https://assinment-10-server-sigma.vercel.app/courses')
    .then(response => response.json())
    .then(data => setCourses(data))
 },[])

    return (
        <div>
          <Container>
            <Row>
                <Col lg='3'>
                      <div>
                        {
                           courses.map(course => <p className='mt-4' key={course.id}>
                            <Link to={`/course/${course.id}`}>{course.name}</Link>
                           </p>)
                        }
                      </div>
                </Col>

                <Col lg='9' >
                 {
                    courses.map(course => 
                       <div className="container">
                          <div className='mt-2 row row-cols-2'>
                            
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={course.img} />
                            <Card.Body>
                                <Card.Title className='text-dark'>{course.name}</Card.Title>
                                <Card.Text className='text-black fs-6'>
                                  {course.title}
                                </Card.Text>
                                <Button variant="primary">More Now</Button>
                            </Card.Body>
                            </Card>
                              </div>
                       </div>
                        )
                 }
                </Col>
            </Row>
          </Container>
        </div>
    );
};

export default Courses;




