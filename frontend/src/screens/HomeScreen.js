import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import About from './AboutScreen'
import { Media } from 'react-bootstrap'
import { Toast, ToastBody, ToastHeader } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listResults } from '../actions/resultActions'
import { Card, Button, Modal, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const user = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : []
  const resultDetails = useSelector((state) => state.resultDetails)
  const { loading, error, results } = resultDetails
  // console

  useEffect(() => {
    if (user._id !== undefined) dispatch(listResults(user._id))
  }, [])

  return (
    <div className='container'>
      {!userInfo ? (
        <div className='container' style={{ textAlign: 'center' }}>
          <br></br>
          <br></br>
          <h1>MindMeld: An Online Examination System</h1>
          <br></br>
          <br></br>
          <em>
          Safe and Secure system,<br></br>
          Conduct various exams such as lab exams, quizzes, and other exams.
          </em>
          <br></br>
          <strong>Support questions of multiple-choice. </strong>
          <br></br>
          <br></br>
          <br></br>
          <em>by</em>
          <br></br>
          <br></br>
          <br></br>
          <strong>QuantumPulse-Tech (QPT352)</strong>
          <br></br>
          <br></br>
          <em>Under Dev-2 team</em>
          <br></br>
          
          <br></br>
          <br></br>
          <br></br>
          <h3>
            .......Project.......<br></br>
            .......MindMeld......<br></br>
            <br></br>
            <br></br>
            QPT352
          </h3>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      ) : (
        <div>
          <br />
          <br />
          <div className='container'>
            <h1>Hi, Welcome to MindMeld ...</h1>
            <h3>{userInfo.name}</h3>
            Your Profile<br></br>
            Contact Admin....<br></br>
            Thank you<br></br>
            <hr />
          </div>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant='danger'>{error}</Message>
          ) : (
            <>
              <div className='container'>
                <h1>Your Results</h1>

                {results.map((result) => (
                  <div className='p-3 bg-secondary my-2 rounded'>
                    <Toast>
                      <ToastHeader style={{ backgroundColor: 'pink' }}>
                        Exam Title: {result.examName}
                      </ToastHeader>
                      <ToastBody>
                        Marks Obtained: {result.score}/{result.maxScore}
                        <br></br>
                        <Link to={`/result/${result.exam}/${result.student}`}>
                          <Button style={{ margin: '0px' }}>Response</Button>
                        </Link>
                      </ToastBody>
                    </Toast>
                  </div>
                ))}
              </div>
              <br />
              <br />
            </>
          )}
          <br />
        </div>
      )}
    </div>
  )
}

export default HomeScreen
