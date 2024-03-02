import React from 'react'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'

const AboutScreen = () => {
  return (
    <>
      <h1 style={{ marginLeft: '30px' }}>About MindMeld</h1>
      <Row>
        <Col md={6}>
          <Image
            src='/images/b.jpg'
            alt='online'
            style={{ margin: '30px', width: '50vw', height: '80vh' }}
            fluid
          />
        </Col>
        <Col md={6}>
          <div className='container'>
            <p style={{ margin: '30px', fontSize: '24px', textAlign: 'left' }}>
              MindMeld is an online examination system where someone can conduct
              examination for other. Recently, some institutions have used
              Google classroom to conduct online evaluation of the subjects .
              However, the approach barely worked. Google Classroom could
              accommodate assignments, but using it for online exams was a
              strenuous task. It resulted in an inefficient examination process.
              In addition to it, there was a considerable scope given to the
              students to indulge in unfair means. Hence, it will be beneficial
              to develop a safe and secure system to conduct various exams such
              as lab exams, quizzes, and other exams that support questions of
              multiple-choice.
            </p>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default AboutScreen
