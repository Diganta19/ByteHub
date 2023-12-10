import React from 'react'
import {useLocation,Link} from "react-router-dom"
import QuestionList from './QuestionList';
import "./HomeMainbar.css"

const HomeMainbar = () => {

  var questionsList = [{
      _id:1,
      upVote:2,
      downVote:1,
      noOfAnswers:2,
      questionTitle:"What is a function?",
      questionBody:"It is meant to be",
      questionTags:["java","c++","python"],
      userPosted:"diggi",
      askedOn:"Dec 8",
      userId:1,
      answer:[{
        answerBody:"Answer",
        userAnswered:"Nayak",
        answeredOn:"Dec 9",
        userId: 2
      }]
  },{
    _id:2,
    upVote:2,
    downVote:1,
    noOfAnswers:2,
    questionTitle:"What is a function2?",
    questionBody:"It is meant to be2",
    questionTags:["java","c++","python"],
    userPosted:"diggi",
    askedOn:"Dec 9",
    userId:1,
    answer:[{
      answerBody:"Answer",
      userAnswered:"Nayak",
      answeredOn:"Dec 9",
      userId: 2
    }]
},{
  _id:3,
  upVote:2,
    downVote:1,
  noOfAnswers:2,
  questionTitle:"What is a function3?",
  questionBody:"It is meant to be3",
  questionTags:["java","c++","python"],
  userPosted:"diggi",
  askedOn:"Dec 10",
  userId:1, answer:[{
    answerBody:"Answer",
    userAnswered:"Nayak",
    answeredOn:"Dec 9",
    userId: 2
  }]
}]

  const location = useLocation();
  const user = 1;
  return (
    <div className='main-bar'>
      <div className="main-bar-header">
      {
        location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
      }
      <Link to={user === null ? "/Auth" : "/AskQuestions" } className='ask-btn'>Ask Question</Link>
      </div>
      <div>
        {
          questionsList === null ?
          <h1>Loading....</h1> :
          <>
          <p>{questionsList.length} Questions</p>{
            <QuestionList questionsList={questionsList} />}
          </>
        
        }
      </div>
    </div>
  )
}

export default HomeMainbar
